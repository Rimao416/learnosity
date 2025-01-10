import API from "@/lib/config";
import { CategoryProps } from "@/lib/interface";

export const fetchCategories = async (): Promise<CategoryProps[]> => {
  const { data } = await API.get("/categories");
  return data;
};
