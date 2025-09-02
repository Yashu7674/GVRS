import NavigateButton from "./NavigateButton";

const researchData = {
  title: "Research at GVR&S",
  description:
    "At GVR&S, research is a cornerstone of our academic philosophy, driving innovation and technological advancements. Our Research and Development (R&D) Cell is a dynamic hub that fosters a strong research ecosystem, aligned with the goals of NEP 2020.",
  image: "https://gnits.ac.in/wp-content/uploads/2024/09/10-1-1536x1024.jpg",

  academicStats: [
    { value: "1,902", label: "Publications" },
    { value: "111", label: "Patents" },
    { value: "1,796", label: "Citations" },
  ],

  fundingStats: [
    { value: "₹ 157 Lks +", label: "Funded Projects" },
    { value: "₹ 137 Lks +", label: "Seed Grant Sanctioned" },
  ],

  button: {
    text: "Explore More",
    link: "/research",
  },
};

const Research = () => {
  return (
    <div className="bg-[#D4880C1F] p-10 flex flex-col md:flex-row gap-10">
      {/* Left Image */}
      <div className="flex-1">
        <img
          className="rounded-2xl object-cover w-full h-full"
          src={researchData.image}
          alt="Research at GVR&S"
        />
      </div>

      {/* Right Content */}
      <div className="flex-1 flex flex-col gap-6">
        <h1 className="text-3xl md:text-5xl text-[#003D3D] font-bold">
          {researchData.title}
        </h1>
        <p className="text-[#3E3E3E] text-base md:text-[20px] font-medium">
          {researchData.description}
        </p>

        {/* Academic Stats */}
        <div className="flex flex-row justify-around text-center">
          {researchData.academicStats.map((stat, index) => (
            <div key={index} className="flex flex-col">
              <span className="text-2xl md:text-[30px] text-[#D4880C] font-bold">
                {stat.value}
              </span>
              <span className="text-[#969696] text-sm md:text-[16px] font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Funding Stats */}
        <div className="flex flex-row justify-around text-center items-center gap-6">
          {researchData.fundingStats.map((stat, index) => (
            <div key={index} className="flex flex-col">
              <span className="text-2xl md:text-[30px] text-[#004242] font-bold">
                {stat.value}
              </span>
              <span className="text-[#969696] text-sm md:text-[16px] font-medium">
                {stat.label}
              </span>
            </div>
          ))}

          <NavigateButton text="Explore More" />
        </div>
      </div>
    </div>
  );
};

export default Research;
 