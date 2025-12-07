import NavbarComp from "./components/NavbarComp";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import QuoteSection from "./components/QuoteSection";
import SupportSection from "./components/SupportSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <NavbarComp />
      <HeroSection />
      <AboutSection />
      <QuoteSection />
      <SupportSection />
      <ContactForm />
      <Footer />
    </>
  );
}
