import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Treatments from "@/components/Treatments";
import WhyUs from "@/components/WhyUs";
import Doctors from "@/components/Doctors";
import BeforeAfter from "@/components/BeforeAfter";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import FloatingCTA from "@/components/FloatingCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Treatments />
        <WhyUs />
        <Doctors />
        <BeforeAfter />
        <Reviews />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
