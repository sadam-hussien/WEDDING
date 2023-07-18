import { Col, Container, Row, Spinner } from "react-bootstrap";

import { memberships } from "../constants";

import Link from "next/link";
import { usePost } from "@/hooks";
import { api_buy_package } from "../server";

export default function Membership() {
  return (
    <section className="pt pb" id="membership-section">
      <Container>
        <h4 className="global-title">اشترك معنا</h4>
        <Row md={3} className="g-5">
          {memberships.map((item, index) => (
            <Col key={index} className="membership-box-wraaper">
              <PackageItem item={item} />
            </Col>
          ))}
        </Row>
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
          window.open(res.data.cashierUrl, "_blank");
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
      <h5 className="membership-box-title mt-auto">{item.title}</h5>
      <ul className="list-unstyled m-0 p-0 w-100">
        {item.features.map((feature, idx) => (
          <li className="membership-feature" key={idx}>
            {feature}
          </li>
        ))}
      </ul>

      <button
        disabled={isLoading}
        onClick={() => buyPackage(item.id)}
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
