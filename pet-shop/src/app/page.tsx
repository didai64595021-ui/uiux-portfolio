import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BreedGallery from '@/components/BreedGallery';
import AvailablePuppies from '@/components/AvailablePuppies';
import AdoptionProcess from '@/components/AdoptionProcess';
import CareSystem from '@/components/CareSystem';
import Reviews from '@/components/Reviews';
import MedicalService from '@/components/MedicalService';
import VisitGuide from '@/components/VisitGuide';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <BreedGallery />
      <AvailablePuppies />
      <AdoptionProcess />
      <CareSystem />
      <Reviews />
      <MedicalService />
      <VisitGuide />
      <Contact />
      <Footer />
    </main>
  );
}
