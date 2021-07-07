import Dotenv from "dotenv";
import { pool } from "./db";

Dotenv.config({ path: ".env.local" });

async function main() {
  const client = await pool.connect();

  const {
    rows: [{ exists: usersExists }],
  } = await client.query(`
    SELECT EXISTS( SELECT 1 FROM pg_tables WHERE schemaname='public' and tablename='users');
  `);

  if (!usersExists) {
    await client.query(
    `
      CREATE TABLE users (
        uid serial PRIMARY KEY,
        nickname varchar (64) UNIQUE NOT NULL,
        email varchar (320) UNIQUE NOT NULL,
        data json
      )
    `
    );
    console.log("'users' table created.");
  } else {
    console.log("'users' table already exists.");
  }
  await client.release();
  await pool.end();
}

main();
