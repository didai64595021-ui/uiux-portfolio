import VideoHero from "@/components/VideoHero";
import QuickSearch from "@/components/QuickSearch";
import FeaturedCars from "@/components/FeaturedCars";
import PriceEstimator from "@/components/PriceEstimator";
import WhyChooseUs from "@/components/WhyChooseUs";
import BuyProcess from "@/components/BuyProcess";
import FinanceCalculator from "@/components/FinanceCalculator";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <VideoHero />
      <QuickSearch />
      <FeaturedCars />
      <PriceEstimator />
      <WhyChooseUs />
      <BuyProcess />
      <FinanceCalculator />
      <Testimonials />
    </>
  );
}
