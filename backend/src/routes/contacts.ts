import { Router } from "express";
import { z } from "zod";
import { prisma } from "../lib/prisma.js";

export const contactsRouter = Router();

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  subject: z.string().trim().min(2).max(100),
  message: z.string().trim().min(10).max(5000),
});

contactsRouter.post("/", async (request, response) => {
  const data = contactSchema.parse(request.body);
  const contact = await prisma.contactMessage.create({ data });
  response.status(201).json({ id: contact.id, createdAt: contact.createdAt });
});
