import { faLink, faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 


const PortfolioCard = ({ img, fullscreenFn }: { img: string, fullscreenFn: React.Dispatch<React.SetStateAction<boolean>> }) => {




    return (
        <>
            <div className="w-full h-full overflow-hidden relative shadow-md group">
                <img className="w-full h-full object-contain" src={img} alt="portfolio card" />

                {/* hover animation. */}
                <div className="w-full h-full flex justify-center items-center absolute top-0 left-0">
                    <div className="w-1/2 h-full bg-[#50b560f0] group-hover:translate-y-0 translate-y-[450px] transition-all duration-300"></div>
                    <div className="w-1/2 h-full bg-[#50b560f0] group-hover:translate-y-0 translate-y-[-450px] transition-all duration-300"></div>

                </div>

                <div className="group-hover:translate-x-[-20px] opacity-0 group-hover:opacity-100 transition-all duration-700 absolute bottom-[22px] right-0 flex justify-center items-center gap-2">
                    <button onClick={() => fullscreenFn(true)} className="bg-white cursor-pointer h-[38px] w-[38px] rounded-full flex justify-center items-center">
                        <FontAwesomeIcon size="lg" color="#50b560f0" icon={faSearchPlus} /></button>

                    <a href="#" className="bg-white cursor-pointer h-[38px] w-[38px] rounded-full flex justify-center items-center">
                        <FontAwesomeIcon size="lg" color="#50b560f0" icon={faLink} /></a>
                </div>
            </div>

        </>
    );
};

export default PortfolioCard;
