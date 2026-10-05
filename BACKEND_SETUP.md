# Backend setup and deployment

The API is an Express + TypeScript service in `backend/`. Prisma connects it to a PostgreSQL database. The frontend uses `NEXT_PUBLIC_API_URL` to submit contact messages and orders.

## 1. Create the Supabase database

1. Create a free project at https://supabase.com/dashboard.
2. Open **Project Settings > Database** (or **Connect**).
3. Copy both PostgreSQL connection strings:
   - Transaction/session pooler URL for `DATABASE_URL`.
   - Direct connection URL for `DIRECT_URL`.
4. Replace the password placeholder with the database password. Keep both values secret.

Use the pooler URL for the running Render service. Prisma uses the direct URL for schema operations.

## 2. Run locally

Create `backend/.env` from `backend/.env.example` and insert the Supabase URLs.

```powershell
cd backend
npm install
npm run db:push
npm run db:seed
npm run dev
```

Create `.env.local` in the repository root:

```env
NEXT_PUBLIC_API_URL=http://localhost:4000
```

In a second terminal:

```powershell
npm install
npm run dev
```

Test the API at `http://localhost:4000/api/health` and `http://localhost:4000/api/products`.

## 3. Deploy the API to Render

1. Push the repository to GitHub.
2. In Render, choose **New > Blueprint** and connect this repository.
3. Render reads the root `render.yaml`; approve creation of `next-level-commerce-api`.
4. Add these secret environment variables when prompted:
   - `DATABASE_URL`: Supabase pooler connection string.
   - `DIRECT_URL`: Supabase direct connection string.
   - `FRONTEND_URL`: the exact Vercel URL, for example `https://your-store.vercel.app`.
5. Deploy. The build generates Prisma, creates/updates tables, and safely upserts the product seed data.
6. Open `https://YOUR-RENDER-SERVICE.onrender.com/api/health` and confirm `status: ok`.

Render's free web service sleeps after inactivity, so the first request can be slow. Do not use a local SQLite file on the free service because its filesystem is ephemeral.

## 4. Connect Vercel

1. Open the frontend project in Vercel.
2. Go to **Settings > Environment Variables**.
3. Add:

```env
NEXT_PUBLIC_API_URL=https://YOUR-RENDER-SERVICE.onrender.com
```

4. Add it to Production, Preview, and Development as appropriate.
5. Redeploy the frontend.
6. Update `FRONTEND_URL` on Render if the final Vercel domain differs, then redeploy the backend.

## API routes

- `GET /api/health`
- `GET /api/products`
- `GET /api/products/:id`
- `POST /api/contacts`
- `POST /api/orders`
- `GET /api/orders/:orderNumber?email=customer@example.com`

The server recalculates all prices from database records. It never trusts totals sent by the browser and never receives or stores card numbers/CVC values.

## Payments

The current card form is visibly marked demo mode. Before taking real payments, replace it with Stripe Checkout or Stripe Elements and confirm orders through a verified Stripe webhook. Never send raw card details to this API.
