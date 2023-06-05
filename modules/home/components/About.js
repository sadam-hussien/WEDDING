import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

export default function About() {
  return (
    <section className="about-section box p-0">
      <Container>
        <div className="pt pb">
          <h4 className="global-title">من نحن</h4>

          <Row md={2} className="g-5 align-items-center">
            <Col>
              <h4 className="about-title">لماذا تختار موقع ويدينج؟</h4>
              <h5 className="about-desc">
                لقد ساعد الآلاف من العزاب والعازبات المسلمين في العثور على شريك.
                كأحد المواقع الرائدة للزيجات الإسلامية، نحن أحد أكبر المواقع
                الموجودة وأكثرها حيازة على ثقة المستخدمين. ليس بوسع معظم المواقع
                الأخرى أن تقدم لك قاعدة بيانات تحتوي على ٧،٥ مليون عضو وعضوة مع
                وعد بتقديمك لرجال ونساء عزاب مسلمين من حول العالم.
              </h5>
            </Col>

            <Col className="d-flex justify-content-end">
              <Image
                alt=""
                width={500}
                height={500}
                src="/images/auth-bg.jpg"
                className="img-fluid about-img"
              />
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}
