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
          roleName varchar (64) UNIQUE NOT NULL,
        )
      `
    );
    return true;
  }
  return false;
}
