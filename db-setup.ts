import Dotenv from "dotenv";
import { getConnection, pool } from "./db";
import { createUsersTable } from "./db/users";

Dotenv.config({ path: ".env.db-setup" });

async function main() {
  await createUsersTable();
  const client = await getConnection();
  await client.release();
  await pool.end();
}

main();
