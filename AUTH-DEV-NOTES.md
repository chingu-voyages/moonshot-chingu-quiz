# Notes

## Links

### next-auth

- Example Code: https://next-auth.js.org/getting-started/example
- Auth0 Provider: https://next-auth.js.org/providers/auth0
- REST API: https://next-auth.js.org/getting-started/rest-api
- User Data Storage: https://auth0.com/docs/security/data-security/user-data-storage

### auth0

- Next.js Guide: https://auth0.com/docs/quickstart/webapp/nextjs

## Setup

### Environment variables local setup

Obtain these from: https://manage.auth0.com/dashboard and place in `.env.local`

- `AUTH0_CLIENT_ID`
- `AUTH0_CLIENT_SECRET`
- `AUTH0_DOMAIN`

### Callback URL

Determine the callback url for local development by visiting http://localhost:3000/api/auth/providers and configure Allowed Callback URLs with auth0.

### Additional Notes

- Note that there are cookies that are kept with `AUTH0_DOMAIN`. Wipe these if you'd like to test re-authenticating with Auth0.
