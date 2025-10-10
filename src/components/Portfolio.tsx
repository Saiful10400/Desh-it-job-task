import React, { useLayoutEffect, useRef, useState } from "react";

import img1 from "../assets/portfolio/image1.webp";
import img2 from "../assets/portfolio/image2.webp";
import img3 from "../assets/portfolio/image3.webp";
import img4 from "../assets/portfolio/image4.webp";
import img5 from "../assets/portfolio/image5.webp";
import img6 from "../assets/portfolio/image6.webp";

import CenterAlign from "./utils/CenterAlign";
import SectionTittle from "./utils/SectionTittle";
import PortfolioCard from "./sub-components/PortfolioCard";

type ImgObj = { id: number; category: string; link: string };

const Portfolio= ({fullscreenFn}:{fullscreenFn:React.Dispatch<React.SetStateAction<boolean>>}) => {
  const imageArr: ImgObj[] = [
    { id: 1, category: "web", link: img1 },
    { id: 2, category: "app", link: img2 },
    { id: 3, category: "card", link: img3 },
    { id: 4, category: "card", link: img4 },
    { id: 5, category: "app", link: img5 },
    { id: 6, category: "web", link: img6 },
  ];

  const [images, setImages] = useState<ImgObj[]>(imageArr);
  const [notIncludeId, setNotIncludeId] = useState<number[]>([]);
  const [currentCategory, setCurrentCategory] = useState<string>("all");

  const gridRef = useRef<HTMLDivElement | null>(null);

  // Layout state: columns, card width/height, gap, containerHeight
  const [layout, setLayout] = useState({
    cols: 3,
    cardWidth: 408,
    cardHeight: 428,
    gap: 24,
    containerHeight: 428,
  });

  // Compute layout responsively based on container width and image count.
  const computeLayout = () => {
    const container = gridRef.current;
    if (!container) return;

    const containerWidth = container.clientWidth;
    const maxCardWidth = 408;  
    const minCardWidth = 260;  
    const gap = 24;

   
    let cols = Math.max(1, Math.floor((containerWidth + gap) / (maxCardWidth + gap)));
    cols = Math.min(cols, images.length);  

    
    let cardWidth = Math.min(maxCardWidth, (containerWidth - gap * (cols - 1)) / cols);

    
    if (cardWidth < minCardWidth) {
      cols = Math.max(1, Math.floor((containerWidth + gap) / (minCardWidth + gap)));
      cols = Math.min(cols, images.length);
      cardWidth = Math.max(minCardWidth, Math.min(maxCardWidth, (containerWidth - gap * (cols - 1)) / cols));
    }

    const aspectRatio = 428 / 408;  
    const cardHeight = Math.round(cardWidth * aspectRatio);

    const rows = Math.ceil(images.length / cols);
    const containerHeight = rows * cardHeight + (rows - 1) * gap;

    setLayout({ cols, cardWidth, cardHeight, gap, containerHeight });
  };

  // run layout on mount and whenever images change
  useLayoutEffect(() => {
    computeLayout();
    // also observe resize
    let rID: number | null = null;
    const onResize = () => {
      if (rID) cancelAnimationFrame(rID);
      rID = requestAnimationFrame(() => {
        computeLayout();
      });
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      if (rID) cancelAnimationFrame(rID);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images]);

  const filterHandle = (category: string) => {
    setCurrentCategory(category);
    const filteredData = imageArr.filter((img) => img.category === category);
    const notIncluded = imageArr.filter((img) => img.category !== category);
    const notincIds = notIncluded.map((img) => img.id);
     
    setNotIncludeId(notincIds);
    setImages([...filteredData, ...notIncluded]);
  };

  const allFilterHandle = () => {
    setCurrentCategory("all");
    setNotIncludeId([]);
    setImages(imageArr);
  };

  const tittle = "Our Portfolio";
  const heading =
    "Etiam suscipit ante at sem facilisis, id sagittis nunc aliquet. Vivamus sodales elementum pharetra. Cras dignissim justo eu accumsan vulputate.";

  return (
    <CenterAlign>
      <SectionTittle tittle={tittle} heading={heading} />

      <div id="PORTFOLIO">
        <div className="flex justify-center items-center pb-[45px] flex-wrap gap-2">
          {["all", "web", "app", "card"].map((cat) => (
            <button
              key={cat}
              style={{ color: currentCategory === cat ? "#ffbd39" : "#ccc" }}
              onClick={() => (cat === "all" ? allFilterHandle() : filterHandle(cat))}
              className="text-sm px-[10px] py-[2px] uppercase roboto-medium cursor-pointer transition-colors duration-200"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid container (we position children absolutely inside) */}
        <div
          ref={gridRef}
          className="relative w-full"
          style={{ height: layout.containerHeight + "px", minHeight: "200px" }}
        >
          {images.map((img, idx) => {
            const col = idx % layout.cols;
            const row = Math.floor(idx / layout.cols);
            const x = Math.round(col * (layout.cardWidth + layout.gap));
            const y = Math.round(row * (layout.cardHeight + layout.gap));
            const hidden = notIncludeId.includes(img.id);

            return (
              <div
                key={img.id}
                className="absolute"
                style={{
                  width: `${layout.cardWidth}px`,
                  height: `${layout.cardHeight}px`,
                  transform: `translate3d(${x}px, ${y}px, 0)`,
                  transition:
                    "transform 700ms cubic-bezier(.2,.9,.2,1), opacity 450ms ease, filter 400ms ease",
                  opacity: hidden ? 0 : 1,
                  pointerEvents: hidden ? "none" : "auto",
                }}
              >
                {/* PortfolioCard fills parent (w-full h-full) */}
                <PortfolioCard fullscreenFn={fullscreenFn}  img={img.link} />
              </div>
            );
          })}
        </div>
      </div>
    </CenterAlign>
  );
};

export default Portfolio;
