import { Col, Container, Row } from "react-bootstrap";
import { memberships } from "../constants";
import Link from "next/link";

export default function Membership() {
  return (
    <section className="pt pb">
      <Container>
        <h4 className="global-title">اشترك معنا</h4>
        <Row md={3} className="g-5">
          {memberships.map((item, index) => (
            <Col key={index} className="membership-box-wraaper">
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

                <Link href="/subscript" className="my-btn membership-btn">
                  <span>اشتراك</span>
                  <span>
                    <i className="las la-long-arrow-alt-left"></i>
                  </span>
                </Link>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
