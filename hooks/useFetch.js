import { Toast } from "@/components";
import { useQuery } from "react-query";

export default function useFetch({ queryKey, queryFn, options }) {
  return useQuery(queryKey, queryFn, {
    refetchOnWindowFocus: false,
    onError: (error) => {
      // create error alert
      const errorMsg =
        error?.data?.message || error?.data?.msg || error?.data?.error;
      Toast({ icon: "error", title: errorMsg });
    },
    ...options,
  });
}
