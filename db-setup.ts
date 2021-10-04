import Dotenv from "dotenv";
import { getConnection, pool } from "./db";
import { createUsersTable } from "./db/users";
import { createRolesTable } from "./db/roles";

Dotenv.config({ path: ".env.db-setup" });

async function main() {
  await createUsersTable();
  await createRolesTable();
  const client = await getConnection();
  await client.release();
  await pool.end();
}

main();
