import SpatialHero from "@/components/SpatialHero";
import ProjectShowcase from "@/components/ProjectShowcase";
import StyleQuiz from "@/components/StyleQuiz";
import EstimateBuilder from "@/components/EstimateBuilder";
import MaterialLibrary from "@/components/MaterialLibrary";

export default function Home() {
  return (
    <>
      <SpatialHero />
      <ProjectShowcase />
      <StyleQuiz />
      <EstimateBuilder />
      <MaterialLibrary />
    </>
  );
}
