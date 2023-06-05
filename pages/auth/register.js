import { Row, Col } from "react-bootstrap";

import { Form, Formik } from "formik";

import * as Yup from "yup";

import { FormHeader, FormTitle, FormSubmit } from "@/modules/auth/components";

import { InputsHandler } from "@/components";

import { register_fields } from "@/modules/auth/constants";

import AuthLayout from "@/layout/authLayout";

import { api_register } from "@/modules/auth/server";

import { usePost } from "@/hooks";

import { handleDate } from "@/helpers";

import { useRouter } from "next/router";

export default function Register() {
  const router = useRouter();
  const schema = Yup.object().shape({
    email: Yup.string()
      .email("الرجاء ادخال بريد الكترونى صحيح")
      .required("البريد الالكترونى مطلوب"),
    first_name: Yup.string().required("الاسم الاول مطلوب"),
    middle_name: Yup.string().required("الاسم الاوسط مطلوب"),
    last_name: Yup.string().required("اسم العائلة مطلوب"),
    phone: Yup.number("الرجاء ادخال رقم هاتف صحيح").required(
      "رقم الهاتف مطلوب"
    ),
    password: Yup.string()
      .min(7, "الرجاء ادخال كلمة سر تتكون من اكثر من 7 حروف")
      .max(16, "الرجاء ادخال كلمة سر لا تزيد عن 16 حرف")
      .required("كلمة السر مطلوبة"),
    password_confirmation: Yup.string()
      .required("تاكيد كلمة السر")
      .oneOf([Yup.ref("password"), null], "كلمة السر غير مطابقة"),
  });

  const { mutate, isLoading } = usePost({
    queryFn: api_register,
    alert: false,
  });

  const handleSubmit = (values) => {
    mutate(
      {
        ...values,
        dob: handleDate(values.dob),
      },
      {
        onSuccess: () => {
          router.push("/auth");
        },
      }
    );
  };

  return (
    <section className="register">
      <FormHeader
        title={"لديك حساب بالفعل؟"}
        link={"تسجيل دخول"}
        path="/auth/login"
      />
      <FormTitle
        title={"انشاء حساب"}
        subtitle={"ادخل البيانات صحيحة وبدقة لنرشح لك افضل النتائج التى تناسبك"}
      />
      <Formik
        validationSchema={schema}
        onSubmit={handleSubmit}
        initialValues={{
          first_name: "",
          middle_name: "",
          last_name: "",
          dob: "",
          gender: "",
          email: "",
          password: "",
          password_confirmation: "",
          phone: "",
        }}
      >
        {() => (
          <Form>
            <Row>
              {register_fields.map((item, index) => (
                <Col key={index} md={item.col ? item.col : 12}>
                  <InputsHandler item={item} />
                </Col>
              ))}
            </Row>
            <FormSubmit title={"انشاء حساب"} loading={isLoading} />
          </Form>
        )}
      </Formik>
    </section>
  );
}

Register.getLayout = function getLayout(page) {
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
