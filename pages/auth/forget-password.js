import { useState } from "react";

import { useRouter } from "next/router";

import { Formik, Form } from "formik";

import * as Yup from "yup";

import {
  FormFooter,
  FormHeader,
  FormSubmit,
  FormTitle,
} from "@/modules/auth/components";

import { InputWithIcon, Toast } from "@/components";

import { useDispatch } from "react-redux";

import AuthLayout from "@/layout/authLayout";

export default function Forget() {
  const [loading, setLoading] = useState(false);
  const { push: navigate } = useRouter();
  const dispatch = useDispatch();
  const schema = Yup.object().shape({
    email: Yup.string()
      .email("enter_valid_email")
      .required("email_is_required"),
  });
  const handleSubmit = (values) => {
    setLoading(true);
    navigate("/auth/reset-password", { state: { email: values.email } });

    // dispatch(forgetPassword(values)).then(({ payload }) => {
    //   setLoading(false);
    //   if (payload.error) {
    //     // toast error
    //     Toast({ icon: "error", title: payload.error });
    //   } else {
    //     navigate("/auth/reset-password", { query: { email: values.email } });
    //   }
    // });
  };
  return (
    <section className="forget">
      <FormHeader title={"back_to_login"} link={"login"} path="/auth/login" />
      <FormTitle
        title={"forget_passowrd"}
        subtitle={"forget_password_subtitle"}
      />
      <Formik
        initialValues={{ email: "" }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <InputWithIcon
              id="email-reset-inp"
              name="email"
              placeholder={"type_your_email"}
              type="email"
              icon="lar la-envelope"
              noBorder
            />
            <FormSubmit title={"reset_password"} loading={loading} />
          </Form>
        )}
      </Formik>
      <FormFooter />
    </section>
  );
}

Forget.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};
