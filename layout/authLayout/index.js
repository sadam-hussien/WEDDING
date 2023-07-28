import { Row, Col } from "react-bootstrap";

export default function AuthLayout({ children }) {
  return (
    <section className="auth-page">
      <Row xs={1} lg={2} className="g-0">
        <Col className="auth-container">{children}</Col>
        <Col className="layout d-none d-lg-block">
          <div className="layout-bg"></div>
        </Col>
      </Row>
    </section>
  );
}
