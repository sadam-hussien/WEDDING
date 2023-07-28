import HomeLayout from "@/layout/homeLayout";

import ProfileLayout from "@/layout/profileLayout";

import { FieldArray, Form, Formik } from "formik";

import { layout_styles, profile_data } from "@/modules/profile/constants";

import { InputsHandler } from "@/components";

import { Col, Row, Spinner } from "react-bootstrap";

import { getNames } from "@/helpers";

import { FormFooter } from "@/modules/profile/components";

import { useProfile } from "@/modules/profile/hooks";
import { Fragment } from "react";

export default function MaritalStatus() {
  const { maritalStatus } = profile_data;

  const namesOfInputs = getNames(maritalStatus.fields);

  const namesOfChildrenDataInputs = getNames(
    maritalStatus.fields.at(-1).fields
  );

  function arraysPayloadHandler(name, data, fd) {
    data.forEach((item, index) => {
      for (let field in item) {
        fd.append(`${name}[${index}][${field}]`, item[field]);
      }
    });
  }

  function handlePayload(values) {
    const fd = new FormData();

    for (let field in values) {
      if (Array.isArray(values[field])) {
        arraysPayloadHandler(field, values[field], fd);
      } else {
        fd.append(field, values[field]);
      }
    }

    fd.append("step", 2);

    return fd;
  }

  const { handleSubmit, isLoading, isLoadingProfileData, data } = useProfile({
    handlePayload,
  });

  function orderItems(dependant, dependantValue, value) {
    if (Array.isArray(dependantValue)) {
      return dependant ? !dependantValue.includes(value) : false;
    }
    return dependant ? value !== dependantValue : false;
  }

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
            ...data?.step_2,
            children_data: data?.step_2?.children_data || [
              namesOfChildrenDataInputs,
            ],
          } || { ...namesOfInputs, children_data: [namesOfChildrenDataInputs] }
        }
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form className="h-100 d-flex flex-column profile-form box">
            <Row>
              {maritalStatus.fields.map((field, index) => (
                <Col
                  key={index + field.id}
                  {...field.cols}
                  className={`${
                    orderItems(
                      field.dependant,
                      field.dependantValue,
                      values[field.dependant]
                    )
                      ? "order-last"
                      : ""
                  }`}
                >
                  {field.type !== "fieldArray" ? (
                    <InputsHandler item={field} />
                  ) : (
                    <Row className="align-items-end">
                      <FieldArray
                        name={field.name}
                        render={(arrayHelpers) => (
                          <>
                            {values[field.name].map((item, idx) => (
                              <Fragment key={item.id + "" + idx + "wrapper"}>
                                {idx > 0 && (
                                  <Col
                                    xs={12}
                                    key={idx + "" + item.id + "border"}
                                  >
                                    <hr />
                                  </Col>
                                )}
                                {field.fields.map((itemField, itemIdx) => (
                                  <Col
                                    key={idx + "" + itemIdx + itemField.id}
                                    {...itemField.cols}
                                  >
                                    <InputsHandler
                                      item={{
                                        ...itemField,
                                        name: `${field.name}.${idx}.${itemField.name}`,
                                        id: `${itemField.id}.${idx}.${itemIdx}`,
                                      }}
                                    />
                                  </Col>
                                ))}

                                <Col
                                  key={idx + "" + item.id + "actions"}
                                  md={3}
                                  className="d-flex justify-content-end align-items-center gap-3"
                                >
                                  {values.has_children == "1" &&
                                    values[field.name].length - 1 > 0 && (
                                      <button
                                        className="remove-btn mb-md border-0 p-0"
                                        type="button"
                                        onClick={() => arrayHelpers.remove(idx)}
                                      >
                                        <i className="las la-trash"></i>
                                      </button>
                                    )}
                                  {values.has_children == "1" &&
                                    values[field.name].length - 1 === idx && (
                                      <button
                                        className="add-btn mb-md border-0 p-0 "
                                        type="button"
                                        onClick={() =>
                                          arrayHelpers.push(
                                            namesOfChildrenDataInputs
                                          )
                                        }
                                      >
                                        <i className="las la-plus"></i>
                                      </button>
                                    )}
                                </Col>
                              </Fragment>
                            ))}
                          </>
                        )}
                      />
                    </Row>
                  )}
                </Col>
              ))}
            </Row>

            <FormFooter
              loading={isLoading}
              link="الحالة الصحية"
              path="/profile/health-status"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}

MaritalStatus.getLayout = function getLayout(page) {
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
