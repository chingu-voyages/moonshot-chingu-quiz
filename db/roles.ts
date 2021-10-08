import { getConnection } from "./index";

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
          roleId uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
          roleName varchar (64) UNIQUE NOT NULL
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

  if (!usersRolesExists) {
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
  return false;
}

export async function insertNewRole(name: string) {
  const client = await getConnection();

  const { rows: roleRows } = await client.query(
    `SELECT FROM ONLY roles WHERE roleName = $1`,
    [name]
  );

  if (roleRows.length === 0) {
    await client.query(
      `
        INSERT INTO roles (roleId, roleName)
        VALUES (DEFAULT, name)
      `
    );
    return `Role ${name} successfully added`;
  }
  throw `Role ${roleRows[0].roleName} with ID ${roleRows[0].roleId} already exists in table`;
}
