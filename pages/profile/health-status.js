import HomeLayout from "@/layout/homeLayout";

import ProfileLayout from "@/layout/profileLayout";

import { Form, Formik } from "formik";

import { layout_styles, profile_data } from "@/modules/profile/constants";

import { InputsHandler } from "@/components";

import { Col, Row, Spinner } from "react-bootstrap";

import { getNames } from "@/helpers";

import { FormFooter } from "@/modules/profile/components";
import { useProfile } from "@/modules/profile/hooks";

export default function HealthStatus() {
  const { healthStatus } = profile_data;

  const namesOfInputs = getNames(healthStatus.fields);

  function handlePayload(values) {
    const fd = new FormData();

    for (let field in values) {
      fd.append(field, values[field]);
    }

    fd.append("step", 3);

    return fd;
  }

  const { handleSubmit, isLoading, isLoadingProfileData, data } = useProfile({
    handlePayload,
  });

  if (isLoadingProfileData) {
    return (
      <Spinner
        as="span"
        animation="border"
        size="md"
        role="status"
        aria-hidden="true"
      />
    );
  }

  return (
    <div>
      <Formik
        initialValues={
          {
            ...data?.step_3,
            disease_type: data?.step_3?.disease_type
              ? data?.step_3?.disease_type.split(",")
              : "",
          } || namesOfInputs
        }
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form className="h-100 d-flex flex-column profile-form box">
            <Row>
              {healthStatus.fields.map((field, index) => (
                <Col key={index + field.id} {...field.cols}>
                  <InputsHandler item={field} />
                </Col>
              ))}
            </Row>

            <FormFooter
              loading={isLoading}
              link="مسكن الزوجية"
              path="/profile/marital-housing"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}

HealthStatus.getLayout = function getLayout(page) {
  return (
    <HomeLayout
      containerProps={layout_styles.containerProps}
      headerProps={layout_styles.headerProps}
    >
      <ProfileLayout>{page}</ProfileLayout>
    </HomeLayout>
  );
};

// if user is logged in redirect to home page
export async function getServerSideProps({ req }) {
  const isAuth = req.cookies.access_token;
  if (!isAuth) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
