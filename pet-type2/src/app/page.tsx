import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PuppyMatchQuiz from '@/components/PuppyMatchQuiz';
import BreedExplorer from '@/components/BreedExplorer';
import LivePuppyFeed from '@/components/LivePuppyFeed';
import AdoptionJourney from '@/components/AdoptionJourney';
import HealthDashboard from '@/components/HealthDashboard';
import CostCalculator from '@/components/CostCalculator';
import ReviewStories from '@/components/ReviewStories';
import VirtualVisit from '@/components/VirtualVisit';
import SmartContact from '@/components/SmartContact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <PuppyMatchQuiz />
      <BreedExplorer />
      <LivePuppyFeed />
      <AdoptionJourney />
      <HealthDashboard />
      <CostCalculator />
      <ReviewStories />
      <VirtualVisit />
      <SmartContact />
      <Footer />
    </main>
  );
}
