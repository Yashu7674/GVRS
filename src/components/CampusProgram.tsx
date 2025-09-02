import { useState } from "react";
import NavigateButton from "./NavigateButton";

const CampusProgramData = {
  title: "Global Marvels in Engineering",
  description:
    "At GVR&S, we believe in shaping the next generation of leaders in technology and engineering. Our programs are designed to provide a robust foundation in engineering principles, coupled with practical skills that prepare our students to excel in the ever-evolving technological landscape",
  programsList: [
    { name: "EEE", videoId: "dQw4w9WgXcQ" },
    { name: "ECE", videoId: "abcd1234" },
    { name: "CSE", videoId: "efgh5678" },
    { name: "IT", videoId: "ijkl91011" },
    { name: "CSM & CSD", videoId: "mnop1213" },
    { name: "ETE", videoId: "qrst1415" },
  ],
};

const CampusProgram = () => {
  const [selectedProgram, setSelectedProgram] = useState(
    CampusProgramData.programsList[0].name
  );

  const selectedVideo = CampusProgramData.programsList.find(
    (p) => p.name === selectedProgram
  )?.videoId;

  return (
    <div className="bg-[#D4880C1F] p-10 flex flex-col md:flex-row gap-10">
      {/* Left Side */}
      <div className="flex-1">
        <h1 className="text-3xl md:text-5xl font-bold text-[#003D3D] my-5">
          {CampusProgramData.title}
        </h1>
        <h5 className="text-[#3E3E3E] text-base md:text-[20px] font-medium mb-5">
          {CampusProgramData.description}
        </h5>
        <NavigateButton text="Life at GNIT'S" />
      </div>

      {/* Right Side */}
      <div className="flex-1 flex gap-6">
        {/* Video Preview */}
        <div className="flex-1 w-2/3 aspect-video rounded-lg overflow-hidden shadow-lg">
          {selectedVideo && (
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${selectedVideo}`}
              title={selectedProgram || "Program Video"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>

        {/* Programs List - Scrollable */}
        <div className="w-1/3 max-h-[300px] overflow-y-auto pr-2 border-r border-gray-300">
          <h5 className="font-bold text-xl py-4">Explore</h5>
          {CampusProgramData.programsList.map((program) => (
            <button
              key={program.name}
              onClick={() => setSelectedProgram(program.name)}
              className={`block w-full text-left px-4 py-3 rounded-md mb-2 font-semibold transition-colors
                ${
                  selectedProgram === program.name
                    ? "bg-[#003D3D] text-white"
                    : "bg-white text-[#003D3D] hover:bg-gray-100"
                }`}
            >
              {program.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CampusProgram;
 