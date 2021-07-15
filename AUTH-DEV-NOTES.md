# Notes

## Local Setup

This is a Next.js project. It also requires a Postgresql database. A `docker-compose.yml` file is included
for convenience so a test environment can be bootstrapped quickly. You do not have to use the
`docker-compose.yml` file and probably won't use it on production but provision the Postgresql separately.
The following instructions are geared towards a local setup on a Development machine.

### 0. Auth0 Setup

This setup is required for Auth-related stuff to work.

1. Sign up with Auth0: https://auth0.com
2. A default application is created. We'll use that. Click on *Applications* and then *Applications* 
then the sole app *Default App*
3. Update the *Name* to whatever is appropriate
4. *Application Type* should be `Regular Web Application`
5. *Token Endpoint Authentication Method* should be `Post`
6. *Allowed Callback URLs* should be `http://localhost:3000/api/auth/callback/auth0`. (Note that this can be found
by running the app and goinge here http://localhost:3000/api/auth/providers)
7. *Allowed Logout URLs* should be set to `http://localhost:3000`. This is so `returnTo` query param will work.

### 1. Creating a `.env.local` file

You'll need to create a `.env.local` file with the following:

```
PGUSER=docker
PGHOST=localhost
PGDATABASE=docker
PGPASSWORD=docker
PGPORT=5432
NEXT_PUBLIC_AUTH0_CLIENT_ID=...
AUTH0_CLIENT_SECRET=...
NEXT_PUBLIC_AUTH0_DOMAIN=...
```

Obtain the three Auth0-related values from: https://manage.auth0.com/dashboard and place in `.env.local`

### 2. Create a `.env.test.local` file for Test Database

You'll need an `.env.test.local` which will be similar to `.env.local`. The following values should work:

```
PGUSER=docker
PGHOST=localhost
PGDATABASE=docker
PGPASSWORD=docker
PGPORT=15432
```

Run tests with `npm run test`. This will run Jest.

### 3. Running the app

```shell
# 0. Ensure all dependencies are installed
npm install

# 1. Start your Postgres databases
docker-compose up -d

# 2. Create symlink .env.db-setup pointing to .env.local
ln -s .env.local .env.db-setup

# 3. Create Users table
npm run db-setup 

# 4. Start your Next.js app
npm run dev
```

Visit http://localhost:3000

## Production notes

- Don't forget to do a one-time import of `quiz_db.sql` into your Postgresql instance

```shell
# For example
psql -U postgres -h host.somewhere -p 5432 moonshot < quiz_db.sql
```

## Resource Links

### next-auth

- Example Code: https://next-auth.js.org/getting-started/example
- Auth0 Provider: https://next-auth.js.org/providers/auth0
- REST API: https://next-auth.js.org/getting-started/rest-api
- User Data Storage: https://auth0.com/docs/security/data-security/user-data-storage

### auth0

- Next.js Guide: https://auth0.com/docs/quickstart/webapp/nextjs