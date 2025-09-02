import Divider from "./Divider";
import LinkWithIcon from "./LinkWithIcon";

import AcademicExcellenceIcon from "../assets/svg/academic-excellence-icon.svg";
import ResearchAndDevelopmentIcon from "../assets/svg/research-and-development-icon.svg";
import EquityIcon from "../assets/svg/equity-icon.svg";
import FinancialIndependenceIcon from "../assets/svg/financial-independence-icon.svg";
import EngagementAndGrowthIcon from "../assets/svg/engagement-and-growth.svg";
import NavigateButton from "./NavigateButton";

const InstitutionHighlightsData = {
  title: "GVR&S is Beyond Ordinary",
  description:
    "Our programs are designed to equip students with the skills and knowledge needed to excel in today’s rapidly changing technological landscape.",
  highlights: [
    {
      id: 1,
      title: "Academic Excellence",
      description:
        "We uphold the highest standards in education, preparing students for success in their careers and beyond.",
      image: AcademicExcellenceIcon,
    },
    {
      id: 2,
      title: "Research and Development",
      description:
        "We drive innovation through active engagement in research, fostering advancements in technology and real-world solutions.",
      image: ResearchAndDevelopmentIcon,
    },
    {
      id: 3,
      title: "Diversity, Equity, and Inclusion",
      description:
        "We create an inclusive environment where diversity is embraced, and everyone has an equal opportunity to succeed.",
      image: EquityIcon,
    },
    {
      id: 4,
      title: "Financial Independence",
      subtitle: "Innovation",
      description:
        "We equip students with the knowledge and skills to achieve financial independence and thrive in their chosen fields.",
      image: FinancialIndependenceIcon,
    },
    {
      id: 5,
      title: "Engagement and Growth",
      description:
        "We encourage active participation in initiatives that contribute to societal growth and positive community impact.",
      image: EngagementAndGrowthIcon,
    },
  ],
};

const InstitutionHighlights = () => {
  return (
    <div className="bg-[#E0E0E0] py-10 px-5">
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-5xl font-bold text-[#003D3D] my-5">
          {InstitutionHighlightsData.title}
        </h1>
        <span className="text-[#3E3E3E] text-base md:text-[20px] font-medium my-5">
          {InstitutionHighlightsData.description}
        </span>
        <NavigateButton text="Learn More About GVR&S" />
      </div>
      <div className="flex flex-wrap justify-center my-15">
        {InstitutionHighlightsData?.highlights.map((card, index) => (
          <div
            key={card.id}
            className={`w-[100%] md:w-[20%] shadow-md p-[30px] transform transition duration-300 hover:scale-115 hover:bg-[#FDC830] hover:text-[#000000] flex flex-col ${
              index % 2 === 0
                ? "bg-[#003d3d] text-[#ffffff]"
                : "bg-[#ececec] text-[#969696]"
            }`}
          >
            <Divider
              color={`${index % 2 === 0 ? "#ffffff" : "#3e3e3e"}`}
              width="w-[20%]"
            />

            {/* Image */}
            <img
              src={card.image}
              alt={card.title}
              className="w-[50px] h-[50px] mb-5"
            />

            {/* Content */}
            <div className="flex flex-col flex-1">
              <h2
                className={`text-xl font-bold ${
                  index % 2 === 0
                    ? "text-[#ffffff] hover:text-[#ffffff]"
                    : "text-[#1D2939] hover:text-[#1D2939]"
                }`}
              >
                {card.title}
              </h2>
              <p className="text-lg font-normal mt-2 mb-4 flex-grow ">
                {card.description}
              </p>

              <LinkWithIcon
                label="Explore"
                href="/explore"
                color={`${index % 2 == 0 ? "white" : "green"}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstitutionHighlights;
