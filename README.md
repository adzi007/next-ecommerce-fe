This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```


## Prisma (development)

**1. Installing Prisma**

```bash
npx prisma init
```

It will creates:
```bash
prisma/
  schema.prisma
.env
```

Setup `.env`
```
DATABASE_URL="mysql://root:password@localhost:3306/mydb"
```

**2. Database Setup & Privileges**
```bash
# Go to the database container and execute the mariadb client
docker exec -it ecommerce_db mariadb -u root -p

# Grant access to user
GRANT ALL PRIVILEGES ON *.* TO 'adzi'@'%' WITH GRANT OPTION;

# or specific database
GRANT ALL PRIVILEGES ON ecommerce_shadow.* TO 'your_mysql_user'@'localhost';

# Apply privilages
FLUSH PRIVILEGES;
```

**3. Define Your Schema**

Example `prisma/schema.prisma`

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String?
  createdAt DateTime @default(now())
}

```

**4. Creating and Updating the Database Tables (Migrations)**
Everytime you change the schema in `prisma/schema.prisma`, run this to apply the changes

```bash

# apply changes
npx prisma migrate dev --name your_migration_name


# example when in the first initiation
npx prisma migrate dev --name init

# example: add a column to a table
npx prisma migrate dev --name add_col_image_to_user

# example: add a column to a table
npx prisma migrate dev --name drop_col_status_in_user

```

**5. Fixing Sync Problems (Drift / Shadow Errors)**

```bash
npx prisma migrate reset
```
This:
1. Drops the DB.
2. Recreates it.
3. Applies all migrations.
4. Optionally seeds it.

**6. In Production**
```bash
npx prisma migrate deploy
```
