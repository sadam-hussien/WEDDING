import HomeLayout from "@/layout/homeLayout";

import ProfileLayout from "@/layout/profileLayout";

import { Form, Formik } from "formik";

import { layout_styles, profile_data } from "@/modules/profile/constants";

import { InputsHandler } from "@/components";

import { Col, Row, Spinner } from "react-bootstrap";

import { getNames } from "@/helpers";

import { FormFooter } from "@/modules/profile/components";

import { useProfile } from "@/modules/profile/hooks";

export default function MarriageCulture() {
  const { marriageCulture } = profile_data;

  let namesOfInputs = {};

  marriageCulture.tabs.forEach((item) => {
    const names = getNames(item.fields);
    namesOfInputs = { ...namesOfInputs, ...names };
  });

  function handlePayload(values) {
    const fd = new FormData();

    for (let field in values) {
      fd.append(field, values[field]);
    }

    fd.append("step", 7);

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
        initialValues={data?.step_7 || namesOfInputs}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form className="h-100 d-flex flex-column profile-form">
            {marriageCulture.tabs.map((tab, index) => (
              <div key={index} className="mb-lg">
                <h5 className="profile-form-tab-title mb-md">{tab.title}</h5>
                <div className="profile-form-tab-fields box">
                  <Row>
                    {tab.fields.map((field, idx) => (
                      <Col key={index + field.id} {...field.cols}>
                        <InputsHandler item={field} />
                      </Col>
                    ))}
                  </Row>
                </div>
              </div>
            ))}

            <FormFooter loading={isLoading} />
          </Form>
        )}
      </Formik>
    </div>
  );
}

MarriageCulture.getLayout = function getLayout(page) {
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
  const data = JSON.parse(req.cookies.data).package_type;

  if (!data) {
    return {
      redirect: {
        destination: "/#membership-section",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
