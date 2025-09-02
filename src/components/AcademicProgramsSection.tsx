import Divider from "./Divider";
import LinkWithIcon from "./LinkWithIcon";

const AcademicProgramsSectionData = {
  title: "Providing comprehensive education for All Students",
  description:
    "Our programs are designed to equip students with the skills and knowledge needed to excel in today’s rapidly changing technological landscape.",
  programsData: [
    {
      id: 1,
      title: "Master Programs",
      description:
        "Specialized postgraduate courses designed to boost careers with in-depth expertise.",
      buttonText: "Explore",
      image:
        "https://gnits.ac.in/wp-content/uploads/2024/09/DSC_1158-scaled.jpg",
    },
    {
      id: 2,
      title: "Undergraduate Studies",
      description:
        "Comprehensive bachelor’s degrees across diverse disciplines for a strong foundation.",
      buttonText: "Discover",
      image:
        "https://gnits.ac.in/wp-content/uploads/2024/09/KTDL7542-scaled.jpg",
    },
    {
      id: 3,
      title: "Research Opportunities",
      description:
        "Hands-on research projects with expert faculty, driving innovation and discovery.",
      buttonText: "Learn More",
      image: "https://picsum.photos/392/356?random=12",
    },
  ],
};

const AcademicProgramsSection = () => {
  return (
    <div className="py-10 px-5 relative">
      <div className="absolute top-0 left-0 w-full h-[60%] bg-[#e1e8ed]"></div>
      <div className="absolute bottom-0 left-0 w-full h-[40%] bg-[#cce0ee]"></div>

      <div className="relative z-10 flex flex-col w-[75%]">
        <h1 className="text-3xl md:text-5xl font-bold text-[#003D3D] my-5">
          {AcademicProgramsSectionData.title}
        </h1>
        <span className="text-[#3E3E3E] text-base md:text-[20px] font-medium">
          {AcademicProgramsSectionData.description}
        </span>
      </div>

      <div className="flex flex-wrap justify-center gap-6 my-15">
        {AcademicProgramsSectionData?.programsData.map((box) => (
          <div
            key={box.id}
            className="relative w-[100%] md:w-[25%] rounded-xl overflow-hidden shadow-lg group"
          >
            {/* Background Image */}
            <img
              src={box.image}
              alt={box.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors"></div>

            {/* Text overlay */}
            <div className="absolute inset-0 flex flex-col text-white p-4 justify-end">
              <Divider color="#FDC830" width="w-[20%]" />
              <h2 className="text-3xl font-bold text-[#E5E5E5]">{box.title}</h2>
              <p className="text-sm mt-2 mb-4 max-w-[80%] font-semibold">
                {box.description}
              </p>
              <LinkWithIcon
                label="Explore Programs"
                href="/explore"
                color="yellow"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcademicProgramsSection;
 