import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import Values from "@/components/Values";
import ClientLogos from "@/components/ClientLogos";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Portfolio />
      <Values />
      <ClientLogos />
      <Testimonials />
      <section id="faq">
        <FAQ />
      </section>
      <CTA />
    </>
  );
}
