import HomeLayout from "@/layout/homeLayout";

import ProfileLayout from "@/layout/profileLayout";

import { Form, Formik } from "formik";

import { layout_styles, profile_data } from "@/modules/profile/constants";

import { InputsHandler } from "@/components";

import { Col, Row, Spinner } from "react-bootstrap";

import { getNames } from "@/helpers";

import { FormFooter } from "@/modules/profile/components";
import { useProfile } from "@/modules/profile/hooks";

export default function FinancialStatus() {
  const { financialStatus } = profile_data;

  const namesOfInputs = getNames(financialStatus.fields);

  function handlePayload(values) {
    const fd = new FormData();

    for (let field in values) {
      fd.append(field, values[field]);
    }

    fd.append("step", 5);

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
        initialValues={data.step_5 || namesOfInputs}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form className="h-100 d-flex flex-column profile-form box">
            <Row>
              {financialStatus.fields.map((field, index) => (
                <Col key={index + field.id} {...field.cols}>
                  <InputsHandler item={field} />
                </Col>
              ))}
            </Row>

            <FormFooter
              loading={isLoading}
              link="الهدف من الزواج"
              path="/profile/marriage-goal"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}

FinancialStatus.getLayout = function getLayout(page) {
  return (
    <HomeLayout
      containerProps={layout_styles.containerProps}
      headerProps={layout_styles.headerProps}
    >
      <ProfileLayout>{page}</ProfileLayout>
    </HomeLayout>
  );
};
