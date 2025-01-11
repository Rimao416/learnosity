import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(
  req: Request,
  { params }: { params: { categoryId: string } }
) {
  try {
    const { categoryId } = params; // On peut directement accéder à `params`
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
