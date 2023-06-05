import { useFetch, usePost } from "@/hooks";

import { api_get_data, api_send_data } from "../server";

import { Toast } from "@/components";

export function useProfile({ handlePayload }) {
  const { data, isLoading: isLoadingProfileData } = useFetch({
    queryFn: api_get_data,
    queryKey: "get-profile-data",
  });

  const { mutate, isLoading } = usePost({
    queryFn: api_send_data,
    alert: false,
  });

  function handleSubmit(values, actions) {
    const fd = handlePayload(values);

    mutate(fd, {
      onSuccess: (data) => {
        Toast({ icon: "success", title: "تم تحديث البيانات بنجاح" });
      },

      onError: (error) => {
        const errors = error?.data?.errors;
        if (errors) {
          for (let err in errors) {
            actions.setFieldError(err, errors[err][0]);
          }
        }

        Toast({ icon: "error", title: error?.data?.message });
      },
    });
  }

  return { data: data?.data, isLoadingProfileData, isLoading, handleSubmit };
}
