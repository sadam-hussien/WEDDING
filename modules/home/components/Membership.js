import { Col, Container, Row, Spinner } from "react-bootstrap";

import { memberships } from "../constants";

import Link from "next/link";

import { useFetch, usePost } from "@/hooks";

import { api_buy_package, api_get_packages } from "../server";

import { Form, Formik } from "formik";

import { ButtonWithIcon, InputWithIcon } from "@/components";

export default function Membership() {
  const { data, isLoading } = useFetch({
    queryFn: api_get_packages,
    queryKey: "ge-packages",
  });

  const { mutate, isLoading: isLoadingBuy } = usePost({
    queryFn: api_buy_package,
    alert: false,
  });

  function handleSubmit(values) {
    mutate(
      { package_type: values.code },
      {
        onSuccess: (res) => {
          window.location.href = res.data.cashierUrl;
        },
      }
    );
  }

  return (
    <section className="pt pb" id="membership-section">
      <Container>
        <h4 className="global-title">اشترك معنا</h4>
        <Row xs={1} md={2} lg={3} className="g-5">
          {isLoading ? (
            <div>
              <Spinner
                as="div"
                animation="border"
                role="status"
                aria-hidden="true"
              />
            </div>
          ) : (
            <>
              {data?.data &&
                data.data.map((item, index) => (
                  <Col key={index} className="membership-box-wraaper">
                    <PackageItem item={item} />
                  </Col>
                ))}
              <Col className="membership-box-wraaper">
                <Formik initialValues={{ code: "" }} onSubmit={handleSubmit}>
                  {({}) => (
                    <Form className="membership-box box d-flex flex-column align-items-center justify-content-center">
                      <h5 className="text-center mb-4">او عن طريق كود الخصم</h5>
                      <InputWithIcon
                        type="text"
                        name="code"
                        noBorder
                        icon="las la-barcode"
                        placeholder="ادخل كود الخصم"
                        label={"كود الخصم"}
                      />
                      <div className="d-flex justify-content-center">
                        <ButtonWithIcon
                          type="submit"
                          title="اشتراك"
                          icon="las la-check"
                          style={{ minWidth: "150px", maxWidth: "150px" }}
                          radius
                          loading={isLoadingBuy}
                        />
                      </div>
                    </Form>
                  )}
                </Formik>
              </Col>
            </>
          )}
        </Row>

        <Row></Row>
      </Container>
    </section>
  );
}

function PackageItem({ item }) {
  const { mutate, isLoading } = usePost({
    queryFn: api_buy_package,
    alert: false,
  });

  function buyPackage(id) {
    mutate(
      { package_type: id },
      {
        onSuccess: (res) => {
          window.location.href = res.data.cashierUrl;
        },
      }
    );
  }
  return (
    <div className="membership-box box h-100 d-flex flex-column align-items-center justify-content-center">
      <span className="membership-price position-relative">
        <span>{item.price}</span>
        <span className="membership-monthly">شهريا</span>
      </span>
      <h5 className="membership-box-title mt-auto">{item.name}</h5>
      {/* <ul className="list-unstyled m-0 p-0 w-100">
        {item.features.map((feature, idx) => (
          <li className="membership-feature" key={idx}>
            {feature}
          </li>
        ))}
      </ul> */}

      <button
        disabled={isLoading}
        onClick={() => buyPackage(item.value)}
        type="button"
        className="my-btn membership-btn border-0 padding-0 "
      >
        <span>اشتراك</span>
        <span>
          {isLoading ? (
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          ) : (
            <i className="las la-long-arrow-alt-left"></i>
          )}
        </span>
      </button>
    </div>
  );
}
