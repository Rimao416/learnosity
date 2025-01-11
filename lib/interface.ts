export interface CoursProps {
  id: number;
  title: string;
  description: string;
  category: CategoryProps;
  professor: ProfessorProps;
  cover: string;
}

export interface CategoryProps {
  id: number;
  name: string;
}

export interface ProfessorProps {
  id: number;
  name: string;
  profile: string;
}
