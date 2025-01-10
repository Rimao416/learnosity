import { PrismaClient } from '@prisma/client';
import pkg from "./cours.js";
const { categoriesInformatiques } = pkg;
// Prisma Client
const prisma = new PrismaClient();
async function seed() {
  try {
    for (const categoryInformatique of categoriesInformatiques) {
      console.log("Ajout de de la categorie " + categoryInformatique);
      await prisma.category.create({
        data: {
          name: categoryInformatique,
        },
      });
    }
  } catch(error) {
    console.log("Erreur lors de l'obtention");
    console.log(error)
  } finally {
    await prisma.$disconnect();
  }
}

seed();
