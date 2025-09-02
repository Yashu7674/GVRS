import { useState } from "react";
import Divider from "./Divider";

export default function ExpandingCards() {
  const cards = [
    {
      id: 1,
      header: "Leading with Expertise",
      title: "Guided by Excellence, Driven by Knowledge",
      description:
        "At GVR&S, our students are mentored by a distinguished faculty who combine academic rigor with real-world expertise. This ensures that our graduates are well-prepared to tackle the challenges of their careers with confidence and deep knowledge.",
      image:
        "https://gnits.ac.in/wp-content/uploads/2024/08/3Q3A2746-2048x1365.jpg",
      btnText: "Faculty Directory",
    },
    {
      id: 2,
      header: "Igniting Innovation",
      title: "Fueling Entrepreneurial Spirit",
      description:
        "The Entrepreneur Development Cell at GVR&S is the launchpad for turning innovative ideas into thriving ventures. We provide the resources, mentorship, and support needed to nurture entrepreneurial talent and drive business success.",
      image:
        "https://gnits.ac.in/wp-content/uploads/2024/08/20230308125042_IMG_8618-scaled.jpg",
      btnText: "Innovation & Incubation",
    },
    {
      id: 3,
      header: "Thriving Together",
      title: "Explore, Engage, Excel",
      description:
        "GVR&S offers a vibrant student life where diverse clubs and organizations empower students to connect, explore new passions, and develop leadership skills, creating a well-rounded educational experience.",
      image:
        "https://gnits.ac.in/wp-content/uploads/2024/08/ROB00528-scaled.jpg",
      btnText: "Student Clubs",
    },
    {
      id: 4,
      header: "Sharpening Your Edge",
      title: "Empowering Skills for the Future",
      description:
        "Our Skill Enhancement Programs at GVR&S are designed to provide students with the practical training and experience needed to excel in a competitive job market, ensuring they are well-prepared for professional success.",
      image:
        "https://gnits.ac.in/wp-content/uploads/2024/08/3Q3A3495-scaled.jpg",
      btnText: "Skill Enhancement",
    },
    {
      id: 5,
      header: "Excellence in Sports",
      title: "Active Minds, Thriving Spirits",
      description:
        "GVR&S fosters a vibrant sports culture with state-of-the-art facilities and diverse athletic programs. We empower students to maintain physical fitness, excel in sports, and cultivate the teamwork and resilience needed to succeed in every aspect of life.",
      image:
        "https://gnits.ac.in/wp-content/uploads/2024/08/3Q3A3939-2048x1365.jpg",
      btnText: "Sports @ GVR&S",
    },
  ];

  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="flex h-[650px] w-full shadow-lg bg-[#E0E0E0] gap-5 p-10 rounded-lg">
      {cards.map((card, index) => (
        <div
          key={card.id}
          className={`relative flex flex-col cursor-pointer transition-all duration-500 ease-in-out overflow-hidden 
          ${active === index ? "flex-[5]" : "flex-1"}`}
          onMouseEnter={() => setActive(index)}
          onMouseLeave={() => setActive(null)}
        >
          {/* Background Image */}
          <img
            src={card.image}
            alt={card.title}
            className="absolute rounded-lg w-full h-full object-cover transition-transform duration-500"
          />

          <div className="absolute bottom-0 left-0 w-full h-[70%] bg-gradient-to-t from-black to-transparent"></div>

          <div
            className={`absolute bottom-0 left-10 transform -rotate-90 origin-bottom-left whitespace-nowrap overflow-hidden text-ellipsis transition-opacity duration-500 
            ${active === index ? "opacity-30" : "opacity-100"}`}
          >
            <div className="transform rotate-90 inline-block">
              <Divider color="white" width="w-[25px]" />
            </div>
            <span className="text-2xl font-bold text-white ml-2">
              {card?.header}
            </span>
          </div>

          {/* Content */}
          <div className="relative text-white px-4 w-full h-full flex flex-col overflow-hidden">
            {/* Expanded Content */}
            <div
              className={`mt-auto mb-6 ml-7 transition-all duration-500 
                ${active === index ? "opacity-100 delay-300" : "opacity-0"}`}
            >
              <h2 className="text-3xl font-bold mb-4">{card?.title}</h2>
              <p className="text-sm mt-2 mb-4 font-semibold">
                {card.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
 