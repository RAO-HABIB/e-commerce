import { Router } from "express";
import { prisma } from "../lib/prisma.js";

export const productsRouter = Router();

productsRouter.get("/", async (_request, response) => {
  const products = await prisma.product.findMany({ orderBy: { createdAt: "asc" } });
  response.json(products);
});

productsRouter.get("/:id", async (request, response) => {
  const product = await prisma.product.findUnique({ where: { id: request.params.id } });
  if (!product) {
    response.status(404).json({ error: "Product not found" });
    return;
  }
  response.json(product);
});
