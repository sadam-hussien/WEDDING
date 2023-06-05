import { useMutation, useQueryClient } from "react-query";

import { alertSuccess, alertError } from "@/components";

export default function usePost({
  queryFn,
  queryKey,
  successMsg,
  errorMsg,
  onSuccess,
  alert = true,
}) {
  const queryClient = useQueryClient();
  return useMutation(queryFn, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(queryKey);
      // create suceess alert
      if (alert) {
        alertSuccess({ subtitle: data.data.message });
      }
      if (onSuccess) {
        onSuccess();
      }
    },
    onError: (error) => {
      // create error alert
      if (alert) {
        alertError({ subtitle: error.data.error });
      }
    },
  });
}
