import Dotenv from "dotenv";
import { getConnection, pool } from "../db";

Dotenv.config({ path: ".env.test.local" });

import {
  createRolesTable,
  createUsersRolesTable,
  getRoles,
  insertNewRole,
} from "../db/roles";

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

test("insertNewRole adds role to table", async () => {
  expect(process.env.PGUSER).toBe("docker");
  const result = await insertNewRole("testName");
  expect(result?.rowCount).toBe(1);
});

test("insertNewRole returns null if duplicate", async () => {
  expect(process.env.PGUSER).toBe("docker");
  await insertNewRole("duplicateName");
  expect(await insertNewRole("duplicateName")).toBeNull();
});

test("getRoles returns array of roles", async () => {
  expect(process.env.PGUSER).toBe("docker");
  await insertNewRole("example");
  const result = await getRoles();
  expect(result?.length).toBeGreaterThanOrEqual(1);
});

test("getRoles return is array of IRole", async () => {
  expect(process.env.PGUSER).toBe("docker");
  const result = await getRoles();
  expect(result?.[0].roleId).toBeTruthy();
  expect(result?.[0].roleName).toBeTruthy();
});

afterAll(async () => {
  const client = await getConnection();
  await client.release();
  await pool.end();
});
