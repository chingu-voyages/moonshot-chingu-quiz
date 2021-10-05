import Dotenv from "dotenv";
import { getConnection, pool } from "./db";
import { createUsersTable } from "./db/users";
import { createRolesTable, createUsersRolesTable } from "./db/roles";

Dotenv.config({ path: ".env.db-setup" });

async function main() {
  await createUsersTable();
  await createRolesTable();
  await createUsersRolesTable();
  const client = await getConnection();
  await client.release();
  await pool.end();
}

main();
