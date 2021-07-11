import Dotenv from "dotenv";
import { getConnection, pool } from "../db";

Dotenv.config({ path: ".env.test.local" });

import { insertUser } from "../db/users";

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