import modelImage from "../assets/cover/model.webp"
import CoverButton from "./sub-components/CoverButton";
const Cover = () => {
    return (
        <div className="flex justify-between items-center min-h-[80vh]">
            {/* cover text and buttons. */}
            <div className="flex flex-col gap-[30px] min-w-[600px] max-w-1/2">
                <h3 className="text-[20px] text-[#ffbd39] poppins-extrabold">Hello !</h3>
                <p className="text-[30px] leading-[36px] poppins-extrabold">I'm Professional Web Designer &<br /> <span className="text-[#ffba3a]">Wordpress Developer</span></p>
                <p className="text-lg roboto-regular">It is a long established fact that a reader will be distracted by the readable <br /> content of a page when looking at its layout.</p>
                <div className="flex gap-6">
                <CoverButton bg="#7c68ee" text="Hire Me" />
                <CoverButton bg="#ffbd3a" text="Download Cv" />
                </div>
            </div>

            {/* cover model image. */}
            <div className="max-w-[50%]">
                <img className="w-full h-auto object-contain" src={modelImage} alt="model image." />
            </div>
        </div>
    );
};

export default Cover;