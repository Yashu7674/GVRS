import React, { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import DefaultProfile from "../assets/png/default-profile.png";
import NavigateButton from "./NavigateButton";

interface Card {
  id: number;
  img: string;
  name: string;
  designation: string;
  content: string;
}

const cards: Card[] = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  img: DefaultProfile,
  name: `Person ${i + 1}`,
  designation: `Designation ${i + 1}`,
  content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Line ${
    i + 1
  }.`,
}));

const carouselData = {
  title: "People who made it to the top",
  description:
    "At GVR&S, real-world leadership challenges come to life. Our programs and courses will help you learn how to think expansively, act decisively, and inspire those around you to achieve great things.",
};

const Carousel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const cardWidth = 390;

  // Drag handlers
  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = x - startX;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const onMouseUp = () => setIsDragging(false);

  const scrollLeftClick = () => {
    containerRef.current?.scrollBy({ left: -cardWidth, behavior: "smooth" });
  };

  const scrollRightClick = () => {
    containerRef.current?.scrollBy({ left: cardWidth, behavior: "smooth" });
  };

  return (
    <div className="w-full overflow-hidden py-8 bg-gray-100 px-5">
      <div className="flex flex-col w-[50%]">
        <h1 className="text-3xl md:text-5xl font-bold text-[#003D3D] my-5">
          {carouselData.title}
        </h1>
        <span className="text-[#3E3E3E] text-base md:text-[20px] font-medium my-5">
          {carouselData.description}
        </span>

        <NavigateButton text="Alumnae Insights" bgColor="#D4880C" />

      </div>
      <div className="relative">
        {/* Arrows */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-gray-300 rounded-full disabled:opacity-50"
          onClick={scrollLeftClick}
          disabled={containerRef.current?.scrollLeft === 0}
        >
          <FaChevronLeft />
        </button>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-gray-300 rounded-full disabled:opacity-50"
          onClick={scrollRightClick}
          disabled={
            containerRef.current
              ? containerRef.current.scrollLeft +
                  containerRef.current.clientWidth >=
                containerRef.current.scrollWidth
              : false
          }
        >
          <FaChevronRight />
        </button>

        <div
          ref={containerRef}
          className="flex gap-10 overflow-x-auto m-8 scrollbar-hidden"
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseUp}
          onMouseUp={onMouseUp}
          style={{ cursor: "default" }} // remove grab hand
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="w-[340px] bg-gray-200 hover:bg-[#FDC83090] p-10 rounded-lg flex-shrink-0"
            >
              <img
                src={card.img}
                alt={card.name}
                className="w-[140px] rounded-full object-cover m-auto"
              />
              <h3 className="font-bold mt-2">{card.name}</h3>
              <p className="text-sm text-gray-600">{card.designation}</p>
              <p className="text-sm mt-1">{card.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
 