# 🛍️ E-Commerce FE

This project is a **Next.js-based e-commerce frontend** built to **practice professional standards** in modern web development.
It focuses on implementing **MVP (Minimum Viable Product)** features for an e-commerce website such as authentication, product listing, cart management, and checkout flow.

> ⚠️ **Note:** This project is still in progress. The README will be updated as soon as new features are completed.

---

## 🚀 Tech Stack

|Category|Tools / Libraries|
|---|---|
|**Framework**|[Next.js 15](https://nextjs.org/) with App Router|
|**Language**|TypeScript|
|**Styling**|Tailwind CSS v4, `clsx`, `tailwind-merge`|
|**UI Components**|Radix UI, Lucide React Icons|
|**State Management**|Zustand|
|**Form Handling**|React Hook Form + Zod|
|**Data Fetching**|React Query (TanStack Query)|
|**Auth**|NextAuth.js with Prisma Adapter (Credentials + Google)|
|**Database ORM**|Prisma (MySQL / MariaDB)|
|**Utilities**|Axios, BcryptJS, Sonner (toast notifications)|

## 🧩 Purpose

The goal of this project is to **practice building a professional-grade Next.js application**, focusing on:

- Authentication and authorization (NextAuth)
- Database management with Prisma
- Scalable component and folder structure
- API routes with Next.js App Router
- Type safety and form validation with Zod
- State management and data caching with React Query and Zustand

---
## 🛠️ Getting Started

### 1. Install Dependencies

```bash
pnpm install
# or
npm install
# or
yarn install

```

### 2. Run the Development Server

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the app.

---

## 🗄️ Prisma (Development)

### **1. Installing Prisma**

```bash
npx prisma init
```

It creates:
```bash
prisma/
  schema.prisma
.env

```

Set up your `.env` file:
```env
DATABASE_URL="mysql://root:password@localhost:3306/mydb"
```

### 2. Database Setup & Privileges

```bash
# Access the database container
docker exec -it ecommerce_db mariadb -u root -p

# Grant user privileges
GRANT ALL PRIVILEGES ON *.* TO 'adzi'@'%' WITH GRANT OPTION;

# Or limit to specific DB
GRANT ALL PRIVILEGES ON ecommerce_shadow.* TO 'your_mysql_user'@'localhost';

# Apply privileges
FLUSH PRIVILEGES;
```

---
### **3. Define Your Schema**

Example `prisma/schema.prisma`:
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

### **4. Migrations (Creating or Updating Tables)**

Whenever you update `schema.prisma`, run:

```bash
# Apply new changes
npx prisma migrate dev --name your_migration_name
```

Examples:
```bash
npx prisma migrate dev --name init
npx prisma migrate dev --name add_col_image_to_user
npx prisma migrate dev --name drop_col_status_in_user
```

### 5. Sync Database Schema

```bash
# Pull schema from DB
npx prisma db pull

# Push local schema changes to DB
npx prisma db push
```

---
### **6. Fixing Drift or Shadow Errors**

```bash
npx prisma migrate reset
```

This command:
1. Drops the DB
2. Recreates it
3. Applies all migrations
4. Optionally seeds it

### 5. Production Deployment

```bash
npx prisma migrate deploy
```

---
## 📁 Project Structure

```pgsql
├── app
│   ├── api
│   │   ├── auth
│   │   └── cart
│   ├── (auth)
│   │   ├── login
│   │   ├── signup
│   │   └── layout.tsx
│   ├── globals.css
│   ├── (main)
│   │   ├── cart
│   │   ├── checkout
│   │   ├── products
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── providers
│       └── session-provider.tsx
├── components
│   ├── layout
│   └── ui
├── data
│   ├── cart.ts
│   └── products.ts
├── hooks
├── lib
│   ├── api
│   ├── auth.ts
│   ├── generated
│   ├── prisma.ts
│   ├── react-query-provider.tsx
│   ├── utils.ts
│   └── validation
├── prisma
│   ├── migrations
│   └── schema.prisma
├── public
├── services
│   └── user.service.ts
├── store
│   ├── cart.store.ts
│   └── user.store.ts
├── types
├── components.json
├── eslint.config.mjs
├── middleware.ts
├── next.config.ts
├── next-env.d.ts
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

---
## 🧱 Scripts

|Command|Description|
|---|---|
|`pnpm dev`|Start development server|
|`pnpm build`|Build project using Turbopack|
|`pnpm start`|Start production server|
|`pnpm lint`|Run ESLint|
|`pnpm postinstall`|Generate Prisma client automatically after install|

---
## 🔧 Environment Variables

| Variable               | Description                       |
| ---------------------- | --------------------------------- |
| `DATABASE_URL`         | MySQL / MariaDB connection string |
| `GOOGLE_CLIENT_ID`     | Google OAuth client ID            |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret        |
| `NEXTAUTH_SECRET`      | Secret key for session signing    |
| `NEXTAUTH_URL`         | Public URL for NextAuth callbacks |

---
## 🧩 Authentication

This project uses **NextAuth.js** with:
- **Credentials Provider** (email/password)
- **Google Provider** (OAuth 2.0)

Users from Google will not have passwords stored in the DB.  
Prisma schema supports both credential-based and OAuth accounts.

---
## 📜 License

This project is for **educational and practice purposes only**.  
You are free to fork, modify, and use it for learning or portfolio building.