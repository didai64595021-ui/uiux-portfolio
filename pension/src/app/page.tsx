import DynamicHero from "@/components/DynamicHero";
import DayNarrative from "@/components/DayNarrative";
import RoomShowcase from "@/components/RoomShowcase";
import ExperienceQuiz from "@/components/ExperienceQuiz";
import AreaMap from "@/components/AreaMap";
import SeasonWidget from "@/components/SeasonWidget";
import GuestMosaic from "@/components/GuestMosaic";

export default function Home() {
  return (
    <>
      <DynamicHero />
      <DayNarrative />
      <RoomShowcase />
      <ExperienceQuiz />
      <SeasonWidget />
      <AreaMap />
      <GuestMosaic />
    </>
  );
}
