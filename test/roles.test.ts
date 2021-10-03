import Dotenv from "dotenv";
import { getConnection, pool } from "../db";

Dotenv.config({ path: ".env.test.local" });

import { createRolesTable } from "../db/roles";

beforeAll(async () => {
  const client = await getConnection();
  await client.query("DROP TABLE IF EXISTS roles");
  await createRolesTable();
});

test("Verify Table Created", async () => {
  expect(process.env.PGUSER).toBe("docker");
  const client = await getConnection();
  const result = await client.query(`
          SELECT EXISTS( SELECT 1 FROM pg_tables WHERE schemaname='public' and tablename='roles');
        `);
  expect(result).toBeTruthy();
});

afterAll(async () => {
  const client = await getConnection();
  await client.release();
  await pool.end();
});
