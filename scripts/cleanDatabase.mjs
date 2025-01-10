import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function cleanDatabase() {
  try {
    console.log('Nettoyage de la base de données...');

    // Supprimez les données dans l'ordre des dépendances
    await prisma.course.deleteMany();
    console.log('Toutes les données de la table "course" ont été supprimées.');

    await prisma.professor.deleteMany();
    console.log('Toutes les données de la table "professor" ont été supprimées.');

    await prisma.category.deleteMany();
    console.log('Toutes les données de la table "category" ont été supprimées.');

    console.log('Base de données nettoyée avec succès.');
  } catch (error) {
    console.error('Erreur lors du nettoyage de la base de données :', error);
  } finally {
    await prisma.$disconnect();
  }
}

cleanDatabase();
