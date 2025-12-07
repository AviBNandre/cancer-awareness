import { Container, Row, Col, Card } from "react-bootstrap";
import { FaUsers, FaGlobe, FaHandsHelping } from "react-icons/fa";

export default function AboutSection() {
  return (
    <Container id="about" className="my-5 text-center">
      <h2 className="fw-bold mb-4 text-danger">Why Cancer Awareness Matters</h2>
      <p className="text-muted mx-auto" style={{ maxWidth: "800px" }}>
        Cancer affects millions worldwide, but awareness saves lives. Early
        detection, prevention, and compassionate care are our greatest weapons.
      </p>

      <Row className="mt-5">
        {[
          {
            icon: <FaUsers size={50} className="text-danger mb-3" />,
            title: "Community Support",
            text: "We connect survivors, caregivers, and supporters to build strength and share hope.",
          },
          {
            icon: <FaGlobe size={50} className="text-danger mb-3" />,
            title: "Global Awareness",
            text: "Our campaigns reach communities worldwide to spread knowledge about prevention and care.",
          },
          {
            icon: <FaHandsHelping size={50} className="text-danger mb-3" />,
            title: "Volunteer & Contribute",
            text: "Your time and compassion can make a difference. Join us in spreading awareness and hope.",
          },
        ].map((item, idx) => (
          <Col md={4} key={idx} className="mb-4">
            <Card className="shadow border-0 h-100 p-4 hover-zoom">
              {item.icon}
              <h5 className="fw-bold">{item.title}</h5>
              <p className="text-muted">{item.text}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
