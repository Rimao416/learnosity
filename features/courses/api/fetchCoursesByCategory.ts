import API from "@/lib/config";
import { CoursProps } from "@/lib/interface";
export const fetchCoursesByCategory = async (
  categoryId: number
): Promise<CoursProps[]> => {
  const { data } = await API.get(`/courses/${categoryId}`);
  return data;
};
