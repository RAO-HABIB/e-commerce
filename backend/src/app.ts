import express from "express";
import cors from "cors";
import helmet from "helmet";
import { env } from "./lib/env.js";
import { productsRouter } from "./routes/products.js";
import { ordersRouter } from "./routes/orders.js";
import { contactsRouter } from "./routes/contacts.js";
import { errorHandler, notFound } from "./middleware/error-handler.js";

export const app = express();

app.disable("x-powered-by");
app.use(helmet());
app.use(cors({ origin: env.FRONTEND_URL.split(",").map((url) => url.trim()) }));
app.use(express.json({ limit: "100kb" }));

app.get("/", (_request, response) => response.json({ service: "Next Level Commerce API", status: "ok" }));
app.get("/api/health", (_request, response) => response.json({ status: "ok", timestamp: new Date().toISOString() }));
app.use("/api/products", productsRouter);
app.use("/api/orders", ordersRouter);
app.use("/api/contacts", contactsRouter);
app.use(notFound);
app.use(errorHandler);
