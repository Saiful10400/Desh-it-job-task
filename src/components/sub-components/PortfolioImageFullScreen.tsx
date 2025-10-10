import { useEffect, useState } from "react";
import img1 from "../../assets/portfolio/image1.webp";
import img2 from "../../assets/portfolio/image2.webp";
import img3 from "../../assets/portfolio/image3.webp";
import img4 from "../../assets/portfolio/image4.webp";
import img5 from "../../assets/portfolio/image5.webp";
import img6 from "../../assets/portfolio/image6.webp";
import { ArrowLeftIcon, ArrowRight } from "lucide-react";

const PortfolioImageFullScreen = ({ isActive, fullscreenFn }: { fullscreenFn: React.Dispatch<React.SetStateAction<boolean>>, isActive: boolean }) => {
    const images = [img1, img2, img3, img4, img5, img6]

    useEffect(() => {
        if (isActive) {

            document.body.style.overflow = "hidden";
        } else {

            document.body.style.overflow = "";
        }


        return () => {
            document.body.style.overflow = "";
        };
    }, [isActive]);

    const [imgid, setImgId] = useState(0)

    const imageChangeHandle = (type: "up" | "down") => {

        if (type === "up") {
            setImgId(p => p == images.length - 1 ? 0 : p + 1)
        }

        else if (type === "down") {
            setImgId(p => p == 0 ? images.length - 1 : p - 1)
        }
    }



    return (
        <div className={`${isActive ? "block" : "hidden"} cursor-zoom-out fixed top-0 left-0 w-screen h-screen bg-[#000000bb] z-50 flex justify-between px-[32px] items-center`}>
            <button onClick={() => imageChangeHandle("down")} className="cursor-pointer"><ArrowLeftIcon /></button>
            <div className="flex flex-col justify-center items-end">
                <button onClick={() => fullscreenFn(false)} className="text-2xl text-gray-400 hover:text-white transition-all duration-300 cursor-zoom-out">x</button>
                <img src={images[imgid]} alt="" />
                <span className="text-xs text-gray-300 font-bold mt-2">{imgid + 1} of 6</span>
            </div>
            <button onClick={() => imageChangeHandle("up")} className="cursor-pointer"><ArrowRight /></button>
        </div>
    );
};

export default PortfolioImageFullScreen;