import { useState } from "react";

export default function Website2() {
  const cards = [
    {
      id: 1,
      title: "Engineering",
      description:
        "Explore our cutting-edge engineering programs designed to prepare future innovators.",
      image: "https://picsum.photos/400/500?random=21",
    },
    {
      id: 2,
      title: "Medical",
      description:
        "World-class medical studies with state-of-the-art labs and expert faculty.",
      image: "https://picsum.photos/400/500?random=22",
    },
    {
      id: 3,
      title: "Management",
      description:
        "Shape your leadership journey with our global management programs.",
      image: "https://picsum.photos/400/500?random=23",
    },
    {
      id: 4,
      title: "Arts & Science",
      description:
        "Empowering creativity and critical thinking through diverse arts and science courses.",
      image: "https://picsum.photos/400/500?random=24",
    },
    {
      id: 5,
      title: "Research",
      description:
        "Hands-on research opportunities driving innovation across multiple disciplines.",
      image: "https://picsum.photos/400/500?random=25",
    },
  ];

  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="flex h-[400px] w-full overflow-hidden rounded-xl shadow-lg">
      {cards.map((card, index) => (
        <div
          key={card.id}
          className={`relative flex flex-col items-center justify-center cursor-pointer overflow-hidden transition-all duration-500 ease-in-out 
          ${active === index ? "flex-[3]" : "flex-1"}`}
          onMouseEnter={() => setActive(index)}
          onMouseLeave={() => setActive(null)}
        >
          {/* Background Image */}
          <img
            src={card.image}
            alt={card.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content */}
          <div className="relative text-white text-center px-4 transition-all duration-500">
            <h2 className="text-xl font-bold mb-2">{card.title}</h2>

            <p
              className={`text-sm transition-all duration-500 ease-in-out
                ${active === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
              `}
            >
              {card.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
