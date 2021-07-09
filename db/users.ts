import { PoolClient } from "pg";
import { getConnection, pool } from "./index";

export const insertUser = async (nickname: string, email: string) => {
  const client = await getConnection();

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
  return result;
};

