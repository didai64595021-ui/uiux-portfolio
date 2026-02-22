import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import ROICalculator from "@/components/ROICalculator";
import CaseStudies from "@/components/CaseStudies";
import ValuesSection from "@/components/ValuesSection";
import TechStack from "@/components/TechStack";
import TestimonialTicker from "@/components/TestimonialTicker";
import FAQSection from "@/components/FAQSection";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ValuesSection />
      <ROICalculator />
      <CaseStudies />
      <TechStack />
      <TestimonialTicker />
      <FAQSection />
      <ContactForm />
    </>
  );
}
