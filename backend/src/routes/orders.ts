import { randomBytes } from "node:crypto";
import { Router } from "express";
import { z } from "zod";
import { prisma } from "../lib/prisma.js";

export const ordersRouter = Router();

const orderSchema = z.object({
  email: z.string().trim().email().max(254),
  firstName: z.string().trim().min(1).max(80),
  lastName: z.string().trim().min(1).max(80),
  address: z.string().trim().min(5).max(250),
  city: z.string().trim().min(2).max(100),
  state: z.string().trim().min(1).max(100),
  postalCode: z.string().trim().min(2).max(20),
  country: z.string().trim().min(2).max(100),
  deliveryMethod: z.enum(["standard", "express"]),
  items: z.array(z.object({
    productId: z.string().min(1),
    quantity: z.number().int().min(1).max(10),
    size: z.number().positive(),
    colorway: z.string().trim().min(1).max(100),
  })).min(1).max(50),
});

ordersRouter.post("/", async (request, response) => {
  const data = orderSchema.parse(request.body);
  const ids = [...new Set(data.items.map((item) => item.productId))];
  const products = await prisma.product.findMany({ where: { id: { in: ids }, inStock: true } });
  const productMap = new Map(products.map((product) => [product.id, product]));

  if (products.length !== ids.length) {
    response.status(400).json({ error: "One or more products are unavailable" });
    return;
  }

  const subtotal = data.items.reduce((sum, item) => {
    const product = productMap.get(item.productId)!;
    return sum + Number(product.price) * item.quantity;
  }, 0);
  const shipping = data.deliveryMethod === "express" && subtotal <= 200 ? 25 : 0;
  const tax = Number((subtotal * 0.0825).toFixed(2));
  const total = Number((subtotal + shipping + tax).toFixed(2));
  const orderNumber = `NX-${Date.now().toString(36).toUpperCase()}-${randomBytes(2).toString("hex").toUpperCase()}`;

  const order = await prisma.order.create({
    data: {
      orderNumber,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      address: data.address,
      city: data.city,
      state: data.state,
      postalCode: data.postalCode,
      country: data.country,
      deliveryMethod: data.deliveryMethod,
      subtotal,
      shipping,
      tax,
      total,
      items: {
        create: data.items.map((item) => {
          const product = productMap.get(item.productId)!;
          return {
            productId: product.id,
            name: product.name,
            price: product.price,
            quantity: item.quantity,
            size: item.size,
            colorway: item.colorway,
          };
        }),
      },
    },
    include: { items: true },
  });

  response.status(201).json(order);
});

ordersRouter.get("/:orderNumber", async (request, response) => {
  const email = z.string().email().parse(request.query.email);
  const order = await prisma.order.findFirst({
    where: { orderNumber: request.params.orderNumber, email },
    include: { items: true },
  });
  if (!order) {
    response.status(404).json({ error: "Order not found" });
    return;
  }
  response.json(order);
});
