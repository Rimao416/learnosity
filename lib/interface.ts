export interface CoursProps {
  title: string;
  description: string;
  category: CategoryProps;
  professor: ProfessorProps;
}

export interface CategoryProps {
  id: number;
  name: string;
}

export interface ProfessorProps {
  id: number;
  name: string;
}
