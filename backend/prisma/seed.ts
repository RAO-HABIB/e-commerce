import { Prisma, PrismaClient } from "@prisma/client";
import { PRODUCTS } from "../../src/lib/data.js";

const prisma = new PrismaClient();

async function main() {
  for (const product of PRODUCTS) {
    const data = {
      id: product.id,
      name: product.name,
      code: product.code,
      category: product.category,
      price: product.price,
      originalPrice: product.originalPrice,
      tagline: product.tagline,
      description: product.description,
      image: product.image,
      gallery: product.gallery as Prisma.InputJsonValue,
      specs: product.specs as Prisma.InputJsonValue,
      details: product.details as Prisma.InputJsonValue,
      materials: product.materials as Prisma.InputJsonValue,
      sizes: product.sizes as Prisma.InputJsonValue,
      colorways: product.colorways as Prisma.InputJsonValue,
      inStock: product.inStock,
      isNew: product.isNew ?? false,
      isLimited: product.isLimited ?? false,
      rating: product.rating,
      reviewsCount: product.reviewsCount,
    };
    await prisma.product.upsert({
      where: { id: product.id },
      update: data,
      create: data,
    });
  }
  console.log(`Seeded ${PRODUCTS.length} products.`);
}

main()
  .finally(() => prisma.$disconnect())
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
