import { Col, Container, Row } from "react-bootstrap";
import { services } from "../constants";
import Image from "next/image";

export default function Services() {
  return (
    <section className="pt pb" id="service-section">
      <Container>
        <Row md={3} className="g-5">
          {services.map((item, index) => (
            <Col key={index} className="service-box-wraaper">
              <div className="service-box box h-100 d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-box-img d-flex align-items-center justify-content-center">
                  <Image
                    width={100}
                    height={100}
                    src={item.img}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <h6 className="service-box-title mt-auto">{item.title}</h6>
                <h6 className="service-box-desc m-0">{item.desc}</h6>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
