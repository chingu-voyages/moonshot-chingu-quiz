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

export async function createUsersTable() {
  const client = await getConnection();

  const {
    rows: [{ exists: usersExists }],
  } = await client.query(`
    SELECT EXISTS( SELECT 1 FROM pg_tables WHERE schemaname='public' and tablename='users');
  `);

  if (!usersExists) {
    await client.query(
    `
      CREATE TABLE users (
        uid serial PRIMARY KEY,
        nickname varchar (64) UNIQUE NOT NULL,
        email varchar (320) UNIQUE NOT NULL,
        data json
      )
    `
    );
    console.log("'users' table created.");
  } else {
    console.log("'users' table already exists.");
  }
}