import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { FaEnvelope } from "react-icons/fa";

export default function ContactForm() {
  return (
    <Container id="contact" className="my-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="p-4 shadow-lg border-0">
            <Card.Body>
              <h3 className="fw-bold text-center mb-4">
                <FaEnvelope className="text-danger me-2" /> Contact Us
              </h3>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Your Email"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Your Message"
                    required
                  />
                </Form.Group>
                <div className="text-center">
                  <Button variant="danger" type="submit">
                    Send Message
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
