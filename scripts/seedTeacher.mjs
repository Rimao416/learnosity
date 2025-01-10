import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";
import fs from "fs/promises";
import pkg from "./cours.js";
const { coursInformatique } = pkg;

// Prisma Client
const prisma = new PrismaClient();

// Charger les fichiers JSON de manière asynchrone
const loadJSON = async (path) => {
  const data = await fs.readFile(path, "utf8");
  return JSON.parse(data);
};

async function seed() {
  try {
    console.log("Démarrage du seeding...");

    // Charger les données JSON
    const teachersData = await loadJSON("./scripts/teacher.json");
    const coursesData = await loadJSON("./scripts/cours.json");

    // Charger les catégories existantes depuis la base de données
    const categories = await prisma.category.findMany();
    if (categories.length === 0) {
      throw new Error(
        "Aucune catégorie trouvée dans la base de données. Veuillez ajouter des catégories d'abord."
      );
    }
    console.log(
      `Catégories chargées : ${categories.map((cat) => cat.name).join(", ")}`
    );

    // Étape 1 : Créer les professeurs
    for (const teacherImage of teachersData) {
      // console.log(object)
      const professorName = faker.person.fullName();
      const professor = await prisma.professor.create({
        data: {
          name: professorName,
        },
      });

      console.log(`Professeur créé : ${professorName}`);

      // Étape 2 : Associer des cours au professeur
      const numCourses = faker.number.int({ min: 1, max: 5 }); // 1 à 5 cours aléatoires
      for (let i = 0; i < numCourses; i++) {
        const courseIndex = faker.number.int({
          min: 0,
          max: coursInformatique.length - 1,
        });
        const courseTitle = coursInformatique[courseIndex];

        // Assigner une image à un cours
        const courseImageIndex = faker.number.int({
          min: 0,
          max: coursesData.length - 1,
        });
        const courseImage = coursesData[courseImageIndex].nom;

        // Choisir une catégorie au hasard parmi celles disponibles
        const randomCategory =
          categories[faker.number.int({ min: 0, max: categories.length - 1 })];

        const course = await prisma.course.create({
          data: {
            title: courseTitle,
            professorId: professor.id,
            categoryId: randomCategory.id,
          },
        });

        console.log(
          `Cours créé : ${courseTitle} avec image ${courseImage} pour ${professorName} dans la catégorie ${randomCategory.name}`
        );
      }
    }

    console.log("Seeding terminé avec succès !");
  } catch (error) {
    console.error("Erreur lors du seeding :", error);
  } finally {
    await prisma.$disconnect();
  }
}

// Lancer le script
seed();
