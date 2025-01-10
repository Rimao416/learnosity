import { useQuery } from "@tanstack/react-query";
import { fetchCoursesByCategory } from "../api/fetchCoursesByCategory";

export const useCoursesByCategory = (categoryId: number) => {
  return useQuery({
    queryKey: ["courses", categoryId],
    queryFn: () => fetchCoursesByCategory(categoryId),
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnWindowFocus: false,
  });
};
