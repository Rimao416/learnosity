import { useQuery } from "@tanstack/react-query";
import { fetchCourses } from "../api/fetchCourses";

export const useCourses = () => {
  return useQuery({
    queryKey: ["courses"],
    queryFn: fetchCourses,
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnWindowFocus: false,
  });
};
