import React from "react";
import { Facebook, Twitter, Instagram, Globe } from "lucide-react";
import CoverButton from "./sub-components/CoverButton";
import AboutMeAchivement from "./sub-components/AboutMeAchivement";
import CenterAlign from "./utils/CenterAlign";

const AboutMe: React.FC = () => {
    return (
       <div className="bg-[#312f2f]">
        <CenterAlign>
         <section className="flex items-center lg:flex-row flex-col lg:gap-6 gap-[47px]  text-[#b2b0b1] pb-[40px] md:pb-[100px] pt-[40px] md:pt-[100px]">
            <div className="max-w-4xl mx-auto flex flex-col min-w-[50%]">
                {/* Title */}
                <h3 className="text-[#ffbd39] text-xl font-semibold tracking-wide mb-[15px]">
                    About Me
                </h3>

                {/* Headline */}
                <h1 className="text-[22px] font-bold leading-snug mb-5">
                    Hello! I'm <span className="text-[#ffba3a]">David Andrew</span>. I'm a Professional Web Designer &{" "}
                    <span className="text-[#ffba3a]">Wordpress Developer</span> &{" "}
                    <span className="text-[#ffba3a]">Freelancer.</span>
                </h1>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                    consectetur ut lorem vitae ultricies. Integer porta, libero sit amet
                    pretium lobortis, tortor mauris eleifend urna, ut laoreet velit nisi
                    scelerisque ex. Fusce vel pulvinar ligula. Etiam eget dolor leo.
                    Phasellus eu dolor cursus, sodales nunc at, tempor turpis.
                </p>

                <p className="text-gray-300 leading-relaxed">
                    Morbi ac ante neque. In porttitor imperdiet blandit. Aliquam laoreet
                    rutrum mattis. Pellentesque id ligula et purus tincidunt tempus a nec
                    purus.
                </p>

                {/* Social Icons */}
                <div className="flex text-white items-center gap-4 mt-4 mb-[30px]">
                    <span className="text-lg font-semibold text-white">Flow Me :</span>
                    <div className="flex gap-3">
                        <a
                            href="#"
                            className=" h-[40px] w-[40px] flex justify-center items-center   bg-[#163c4f] duration-300 rounded-full hover:bg-[#1b7599] transition-colors"
                        >
                            <Facebook fill="white" size={14} />
                        </a>
                        <a
                            href="#"
                            className=" h-[40px] w-[40px] flex justify-center items-center   bg-[#163c4f] duration-300 rounded-full hover:bg-[#1b7599] transition-colors"
                        >
                            <Twitter fill="white" size={14} />
                        </a>
                        <a
                            href="#"
                            className=" h-[40px] w-[40px] flex justify-center items-center   bg-[#163c4f] duration-300 rounded-full hover:bg-[#1b7599] transition-colors"
                        >
                            <Instagram size={14} />
                        </a>
                        <a
                            href="#"
                            className=" h-[40px] w-[40px] flex justify-center items-center   bg-[#163c4f] duration-300 rounded-full hover:bg-[#1b7599] transition-colors"
                        >
                            <Globe size={14} />
                        </a>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex text-white gap-6">
                    <CoverButton bg="#7c68ee" text="My Work" />
                    <CoverButton bg="#ffbd3a" text="Download Cv" />
                </div>
            </div>
            <AboutMeAchivement/>
        </section>
       </CenterAlign>
       </div>
    );
};

export default AboutMe;
