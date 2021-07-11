import Dotenv from "dotenv";
import { getConnection, pool } from "./db";
import { createUsersTable } from "./db/users";

Dotenv.config({ path: ".env.local" });

async function main() {
  await createUsersTable();
  const client = await getConnection();
  await client.release();
  await pool.end();
}

main();
