import Dotenv from "dotenv";
import { getConnection, pool } from "../db";

Dotenv.config({ path: ".env.test.local" });

import { createRolesTable, createUsersRolesTable } from "../db/roles";

beforeAll(async () => {
  const client = await getConnection();
  await client.query("DROP TABLE IF EXISTS roles");
  await client.query("DROP TABLE IF EXISTS users_roles");
  await createRolesTable();
  await createUsersRolesTable();
});

test("Verify roles table created", async () => {
  expect(process.env.PGUSER).toBe("docker");
  const client = await getConnection();
  const result = await client.query(`
          SELECT EXISTS( SELECT 1 FROM pg_tables WHERE schemaname='public' and tablename='roles');
        `);
  expect(result).toBeTruthy();
});

test("Verify users_roles table created", async () => {
  expect(process.env.PGUSER).toBe("docker");
  const client = await getConnection();
  const result = await client.query(`
          SELECT EXISTS( SELECT 1 FROM pg_tables WHERE schemaname='public' and tablename='users_roles');
        `);
  expect(result).toBeTruthy();
});

afterAll(async () => {
  const client = await getConnection();
  await client.release();
  await pool.end();
});
