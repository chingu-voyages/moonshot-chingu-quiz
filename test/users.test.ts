import Dotenv from "dotenv";
import { getConnection, pool } from "../db";

Dotenv.config({ path: ".env.test.local" });

import { createUsersTable, insertUser } from "../db/users";

beforeAll(async () => {
  await createUsersTable();
  const client = await getConnection();
  await client.query('TRUNCATE TABLE users');
})

test("Test addUser works", async () => {
  expect(process.env.PGUSER).toBe("docker");
  const result = await insertUser("mickey", "mickey@mouseland.example");
  expect(result?.rowCount).toBe(1)
});

afterAll(async () => {
  const client = await getConnection()
  await client.release();
  await pool.end()
})