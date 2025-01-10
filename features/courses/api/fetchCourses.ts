import API from "@/lib/config";
import { CoursProps } from "@/lib/interface";

export const fetchCourses = async (): Promise<CoursProps[]> => {
  const { data } = await API.get("/courses");
  return data;
};
