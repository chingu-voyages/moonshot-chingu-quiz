import Dotenv from "dotenv";
import { getConnection, pool } from "../db";

Dotenv.config({ path: ".env.test.local" });

import { addQuizResult, createUsersTable, insertUser } from "../db/users";

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

test("addQuizResult works", async () => {
  await insertUser("minnie", "minnie@mouseland.example");
  const result = await addQuizResult('minnie@mouseland.example', {
    date: new Date().toISOString(),
    numberCorrect: 7,
    totalQuestions: 10,
    name: "Basics",
    secondsToComplete: 123
  })
})

afterAll(async () => {
  const client = await getConnection()
  await client.release();
  await pool.end()
})