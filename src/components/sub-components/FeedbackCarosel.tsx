import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import image1 from "../../assets/feedback/image1.webp";
import image2 from "../../assets/feedback/image2.webp";
import image3 from "../../assets/feedback/image3.webp";
import FeedBackCard from "./FeedBackCard";

const FeedbackCarousel = () => {
  const caroselDemoData = [
    {
      name: "Johnny Depp",
      media: "Themeforest",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dictum elementum nibh, non tristique ante porta vitae.",
      star: 5,
      image: image1,
    },
    {
      name: "Marshmello",
      media: "Envato",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dictum elementum nibh, non tristique ante porta vitae.",
      star: 4,
      image: image2,
    },
    {
      name: "Hasin Hayder",
      media: "Fiverr",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dictum elementum nibh, non tristique ante porta vitae.",
      star: 5,
      image: image3,
    },
  ];

  const [index, setIndex] = useState(0);

  const goNext = useCallback(() => {
    setIndex((prev) => (prev + 1) % caroselDemoData.length);
  }, [caroselDemoData.length]);

  const goPrev = () => {
    setIndex((prev) =>
      prev === 0 ? caroselDemoData.length - 1 : prev - 1
    );
  };

 

//   auto slide every 2 seconds (optional — uncomment if needed)
  useEffect(() => {
    const interval = setInterval(goNext, 2000);
    return () => clearInterval(interval);
  }, [goNext]);

  return (
    <div className="flex justify-center items-start gap-[12px]">
      {/* Left Button */}
      <button
        onClick={goPrev}
        className=" mt-4 cursor-pointer top-1/2 group -left-10 transform -translate-y-1/2  border-[#ffbd39] border-2 hover:bg-[#ffbd39] text-white rounded-full  p-[6px] shadow-md transition-colors duration-300"
      >
        <ChevronLeft
          className="text-[#ffbd39] group-hover:text-white"
          size={24}
        />
      </button>

      <div className="relative w-[960px] min-h-[400px] z-10 overflow-hidden">
        {/* Carousel Content */}
        <div
          className="flex gap-[20px] transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${index * 470}px)`,
            width: `${caroselDemoData.length * 470}px`,
          }}
        >
          {caroselDemoData.map((item, idx) => (
            <FeedBackCard key={idx} data={item} />
          ))}
        </div>
      </div>

      {/* Right Button */}
      <button
        onClick={goNext}
        className=" top-1/2 cursor-pointer mt-4 group -left-10 transform -translate-y-1/2  border-[#ffbd39] border-2 hover:bg-[#ffbd39] text-white rounded-full  p-[6px] shadow-md transition-colors duration-300"
      >
        <ChevronRight
          className="text-[#ffbd39] group-hover:text-white"
          size={24}
        />
      </button>
    </div>
  );
};

export default FeedbackCarousel;
