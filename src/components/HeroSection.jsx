import { Button } from "react-bootstrap";

export default function HeroSection() {
  return (
    <div
      className="text-white text-center d-flex align-items-center justify-content-center flex-column"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=60)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "80vh",
      }}
    >
      <h1 className="fw-bold display-4 mb-3">Together Against Cancer</h1>
      <p className="lead mb-4" style={{ maxWidth: "600px" }}>
        Join us in spreading awareness, offering support, and inspiring hope.
      </p>
      <Button variant="danger" size="lg">
        Learn More
      </Button>
    </div>
  );
}
