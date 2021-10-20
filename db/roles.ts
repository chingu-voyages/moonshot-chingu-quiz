import { getConnection } from "./index";
import { IRole } from "../models/User/role";

export async function createRolesTable() {
  const client = await getConnection();

  const {
    rows: [{ exists: rolesExists }],
  } = await client.query(`
      SELECT EXISTS( SELECT 1 FROM pg_tables WHERE schemaname='public' and tablename='roles');
    `);

  if (!rolesExists) {
    await client.query(
      `
        CREATE TABLE roles (
          role_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
          role_name varchar (64) UNIQUE NOT NULL
        )
      `
    );
    return true;
  }
  return false;
}

export async function createUsersRolesTable() {
  const client = await getConnection();

  const {
    rows: [{ exists: usersRolesExists }],
  } = await client.query(`
      SELECT EXISTS( SELECT 1 FROM pg_tables WHERE schemaname='public' and tablename='users_roles');
    `);

  if (usersRolesExists) return false;

  await client.query(
    `
      CREATE TABLE users_roles (
        userId int NOT NULL,
        roleId uuid NOT NULL,
        PRIMARY KEY (userId, roleId)
      )
    `
  );
  return true;
}

export async function insertNewRole(name: string) {
  const client = await getConnection();

  const matchRows = await client.query(
    `SELECT FROM ONLY roles WHERE role_name = $1`,
    [name]
  );

  if (matchRows.rowCount !== 0) return null;

  return client.query(
    `
      INSERT INTO roles (role_id, role_name)
      VALUES (DEFAULT, $1)
    `,
    [name]
  );
}

export async function getRoles() {
  const client = await getConnection();

  const { rows } = await client.query(
    `SELECT * 
    FROM roles`
  );

  if (rows.length === 0) return null;

  return rows as [IRole];
}
