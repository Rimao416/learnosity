import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(
  req: Request,
  context: { params: { categoryId: string } }
) {
  try {
    const { categoryId } = context.params; // Accéder correctement à `params`

    const courses = await prisma.course.findMany({
      where: {
        categoryId: parseInt(categoryId, 10), // Convertir en nombre
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
