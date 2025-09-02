import Placements from "./Placements";
import AcademicProgramsSection from "./AcademicProgramsSection";
import CampusProgram from "./CampusProgram";
import ExpandingCards from "./ExpandingCards";
import InstitutionHighlights from "./InstitutionHighlights";
import Research from "./Research";
import Carousel from "./Carousel";

const Website = () => {
  return (
    <>
      <InstitutionHighlights />

      <AcademicProgramsSection />

      <CampusProgram />

      <ExpandingCards />

      <Research />

      <Carousel />

      <Placements />
    </>
  );
};

export default Website;
