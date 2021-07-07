import Dotenv from "dotenv";

Dotenv.config({ path: ".env.local" });

import { insertUser } from "../db/users";

test("Test addUser works", async () => {
  expect(process.env.PGUSER).toBe("docker");
  const result = await insertUser("mickey", "mickey@mouseland.example");
  expect(result?.rowCount).toBe(1)
});
