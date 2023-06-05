import { useState } from "react";

import { useRouter } from "next/router";

// import { Navigate, useLocation, useNavigate } from "react-router-dom";

import { Form, Formik } from "formik";

import * as Yup from "yup";

import {
  FormFooter,
  FormHeader,
  FormSubmit,
  FormTitle,
} from "@/modules/auth/components";

import { InputWithIcon, Toast } from "@/components";

import { reset_fields } from "@/modules/auth/constants";

import { useDispatch } from "react-redux";

import AuthLayout from "@/layout/authLayout";

export default function Reset() {
  const { state: email } = { state: "" };
  const { push: navigate, query } = useRouter();
  console.log(query);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const schema = Yup.object().shape({
    password: Yup.string()
      .min(7, "minmum_symbols", { count: 7 })
      .max(16, "maximum_symbols", { count: 16 })
      .required("new_password_is_required"),
    password_confirmation: Yup.string()
      .required("password_confirm")
      .oneOf([Yup.ref("password"), null], "password_match"),
  });

  const handleSubmit = (values) => {
    setLoading(true);
    // dispatch(resetPassword(values)).then(({ payload }) => {
    //   setLoading(false);
    //   if (payload.error) {
    //     // toast error
    //     Toast({ icon: "error", title: payload.error });
    //   } else {
    //     navigate("/auth/login");
    //   }
    // });
  };

  return (
    <section className="forget">
      <FormHeader title={"back_to_login"} link={"login"} path="/auth/login" />
      <FormTitle
        title={"reset_password"}
        subtitle={"reset_password_subtitle"}
      />
      <Formik
        initialValues={{ password: "", password_confirmation: "" }}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        {() => (
          <Form>
            {reset_fields.map((item, index) => (
              <InputWithIcon
                key={index}
                id={item.id}
                type={item.type}
                name={item.name}
                placeholder={item.placeholder}
                icon={item.icon}
                noBorder={item.noBorder}
              />
            ))}
            <FormSubmit title={"set_new_password"} loading={loading} />
          </Form>
        )}
      </Formik>
      <FormFooter />
    </section>
  );
}

Reset.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};

export async function getServerSideProps(context) {
  const { query } = context;
  if (!query.email) {
    return {
      redirect: {
        destination: "forget-password",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
