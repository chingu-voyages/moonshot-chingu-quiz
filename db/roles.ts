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
          userRoleId uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
          userId integer,
          roleId uuid
        )
      `
    );
    return true;
  }
  return false;
}
