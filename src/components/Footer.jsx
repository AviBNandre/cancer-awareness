import { Container } from "react-bootstrap";
import { FaHeart, FaHandsHelping, FaGlobe } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-5">
      <Container>
        <p className="mb-2 fw-light">
          © {new Date().getFullYear()} Cancer Awareness & Support | Built with
          ❤️ for hope & healing 
        </p>
        <div>
          <FaHeart className="me-2 text-danger" />
          <FaHandsHelping className="me-2 text-danger" />
          <FaGlobe className="text-danger" />
        </div>
      </Container>
    </footer>
  );
}
