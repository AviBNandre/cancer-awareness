import { useEffect, useState } from "react";
import { Container, Card } from "react-bootstrap";
import { FaQuoteLeft } from "react-icons/fa";

export default function QuoteSection() {
  const [quote, setQuote] = useState("");

  const mockQuotes = [
    `"Cancer may have started the fight, but you will finish it." — Unknown`,
    `"You never know how strong you are until being strong is your only choice." — Bob Marley`,
    `"Hope is stronger than fear. Keep moving forward." — Anonymous`,
    `"Strength grows in the moments when you think you can’t go on but you keep going anyway." — Unknown`,
    `"Every day is another chance to fight, to hope, and to heal." — Anonymous`,
  ];

  useEffect(() => {
    // Randomly select one quote from the mock data
    const randomQuote =
      mockQuotes[Math.floor(Math.random() * mockQuotes.length)];
    setQuote(randomQuote);
  }, []);

  return (
    <Container id="quote" className="my-5 text-center">
      <Card className="p-5 shadow-lg border-0 bg-light">
        <FaQuoteLeft size={40} className="text-danger mb-3" />
        <h4 className="fw-bold text-danger mb-3">Inspirational Quote</h4>
        <p className="fst-italic fs-5 text-secondary">{quote}</p>
      </Card>
    </Container>
  );
}
