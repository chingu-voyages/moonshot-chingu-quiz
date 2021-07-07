import { pool } from "./index";

export const insertUser = async (nickname: string, email: string) => {
  const client = await pool.connect();

  const {
    rows: userRows,
  } = await client.query("SELECT email FROM users WHERE email=$1", [email]);

  let result: any = null;
  if (userRows.length === 0) {
    result = await client.query(
      "INSERT INTO users(nickname, email) VALUES ($1, $2)",
      [nickname, email]
    );
  }

  await client.release();
  await pool.end();

  return result;
};
