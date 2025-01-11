import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(
  req: Request,
  { params }: { params: { [key: string]: string | string[] } }
) {
  try {
    const { categoryId } = params; // On peut directement accéder à params

    // Vérifiez que categoryId est une chaîne de caractères
    if (typeof categoryId !== "string") {
      return NextResponse.json(
        { error: "Invalid categoryId" },
        { status: 400 }
      );
    }

    const courses = await prisma.course.findMany({
      where: {
        categoryId: parseInt(categoryId), // Convertir en nombre si nécessaire
      },
      include: {
        category: true,
        professor: true,
      },
    });

    return NextResponse.json(courses);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}