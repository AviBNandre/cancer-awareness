import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function SupportSection() {
  return (
    <Container id="support" className="my-5 text-center">
      <h2 className="fw-bold mb-4 text-danger">Get Involved</h2>
      <Row>
        <Col md={6} className="mb-4">
          <Card className="shadow border-0 p-4 h-100">
            <h5 className="fw-bold mb-3">Become a Volunteer</h5>
            <p className="text-muted">
              Help organize events, raise awareness, or support those in
              treatment. Every contribution matters.
            </p>
            <Button variant="outline-danger">Join Now</Button>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="shadow border-0 p-4 h-100">
            <h5 className="fw-bold mb-3">Donate for a Cause</h5>
            <p className="text-muted">
              Your donations help fund cancer research, treatment, and patient
              support programs.
            </p>
            <Button variant="danger">Donate</Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
