import { Row, Col } from "react-bootstrap";

export default function AuthLayout({ children }) {
  return (
    <section className="auth-page">
      <Row md={2} className="g-0">
        <Col className="auth-container">{children}</Col>
        <Col className="layout">
          <div className="layout-bg"></div>
        </Col>
      </Row>
    </section>
  );
}
