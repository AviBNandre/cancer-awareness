import { Navbar, Container, Nav } from "react-bootstrap";
import { FaRibbon } from "react-icons/fa";

export default function NavbarComp() {
  return (
    <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm py-3">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold text-danger">
          <FaRibbon className="me-2 text-danger" /> Cancer Awareness & Support
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto fw-semibold">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#quote">Inspiration</Nav.Link>
            <Nav.Link href="#support">Get Involved</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
