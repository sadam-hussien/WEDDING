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
        const msg =
          data?.data?.message || data?.data?.msg || data?.message || data?.msg;
        console.log(msg);
        alertSuccess({ subtitle: msg });
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
