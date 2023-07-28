import { useState } from "react";

import { Form, Formik } from "formik";

import * as Yup from "yup";

import { FormHeader, FormTitle, FormSubmit } from "@/modules/auth/components";

import { InputWithIcon } from "@/components";

import { login_fields } from "@/modules/auth/constants";

import { useDispatch } from "react-redux";

import { login } from "@/modules/auth/store";

import AuthLayout from "@/layout/authLayout";

import { api_login } from "@/modules/auth/server";

import { usePost } from "@/hooks";

import { useRouter } from "next/router";

import Cookies from "js-cookie";

export default function Login() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { mutate, isLoading } = usePost({
    queryFn: api_login,
    alert: false,
  });

  const handleSubmit = (values) => {
    mutate(values, {
      onSuccess: (data) => {
        if (data?.data?.email_verified_at) {
          Cookies.set("access_token", data.access_token, {
            expires: data.expires_in,
          });
          Cookies.set("data", JSON.stringify(data.data), {
            expires: data.expires_in,
          });
          dispatch(login(data));
          router.push("/profile");
        } else {
          router.push(`/auth/verify-email?token=${data.access_token}`);
        }
      },
      onError: (error) => {
        // token=${res.access_token}
        console.log(error);
      },
    });
  };

  const schema = Yup.object().shape({
    email: Yup.string()
      .email("ادخل بريد كويس")
      .required("البريد الالكترونى مطلوب"),
    password: Yup.string().required("كلمة السر مطلوبة"),
  });

  return (
    <section className="login">
      <FormHeader
        title={"ليس لديك حساب؟"}
        link={"انشاء حساب"}
        path="/auth/register"
        noBack
      />
      <FormTitle
        title={"تسجيل الدخول"}
        subtitle={"ادخل البريد الالكترونى وكلمة السر للدخول الى لوحة التحكم"}
      />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        {() => (
          <Form>
            {login_fields.map((item, index) => (
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
            <FormSubmit title={"تسجيل الدخول"} loading={isLoading} />
          </Form>
        )}
      </Formik>
    </section>
  );
}

Login.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};

// if user is logged in redirect to home page
export async function getServerSideProps({ req }) {
  const isAuth = req.cookies.access_token;
  if (isAuth) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
