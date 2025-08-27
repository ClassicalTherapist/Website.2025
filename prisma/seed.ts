// prisma/seed.ts
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // upsert ensures we can re-run safely
  await prisma.service.upsert({
    where: { name_minutes: { name: "Classical Swedish", minutes: 60 } as any },
    update: {},
    create: { name: "Classical Swedish", minutes: 60, priceCents: 5000 },
  });

  await prisma.service.upsert({
    where: { name_minutes: { name: "Classical Swedish", minutes: 100 } as any },
    update: {},
    create: { name: "Classical Swedish", minutes: 100, priceCents: 8000 },
  });

  await prisma.service.upsert({
    where: { name_minutes: { name: "Deep Tissue", minutes: 60 } as any },
    update: {},
    create: { name: "Deep Tissue", minutes: 60, priceCents: 6500 },
  });

  await prisma.service.upsert({
    where: { name_minutes: { name: "Deep Tissue", minutes: 100 } as any },
    update: {},
    create: { name: "Deep Tissue", minutes: 100, priceCents: 9500 },
  });
}

main()
  .then(() => console.log("Seeded services ✅"))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
