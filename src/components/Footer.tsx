
import { FacebookIcon, Instagram, LinkedinIcon, Twitter } from "lucide-react";
import CenterAlign from "./utils/CenterAlign";





const Footer = () => {
    return (
        <footer className=" pb-[40px] md:pb-[100px] pt-[40px] md:pt-[100px]">
            <CenterAlign>

                <div className="max-w-7xl mx-auto text-[#ccc]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                        {/* CodeC Section */}
                        <div>
                            <h2 className="text-white text-3xl poppins-black mb-4">CodeC</h2>
                            <p className="text-base roboto-regular leading-relaxed ">
                                Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa
                                magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.
                                Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat
                                mauris nunc congue.
                            </p>
                        </div>

                        {/* Useful Links Section */}
                        <div>
                            <h3 className="text-white text-lg poppins-bold mb-4">
                                USEFUL LINKS
                                <div className="before:content-[''] relative before:absolute before:w-[60px] before:h-[3px] before:bg-[#94c045] w-full h-[3px] bg-[#3c4133] mt-2"></div>
                            </h3>
                            <ul className="space-y-2 roboto-regular">
                                <li>
                                    <a href="#" className="  hover:text-white transition-colors">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="  hover:text-white transition-colors">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="  hover:text-white transition-colors">
                                        Services
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="  hover:text-white transition-colors">
                                        Terms Of Service
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="  hover:text-white transition-colors">
                                        Privacy Policy
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Our Services Section */}
                        <div>
                            <h3 className="text-white text-lg poppins-bold mb-4">
                                OUR SERVICES
                                <div className="before:content-[''] relative before:absolute before:w-[60px] before:h-[3px] before:bg-[#94c045] w-full h-[3px] bg-[#3c4133] mt-2"></div>
                            </h3>
                            <ul className="space-y-2 roboto-regular">
                                <li>
                                    <a href="#" className="  hover:text-white transition-colors">
                                        Photography
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="  hover:text-white transition-colors">
                                        Web Design
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="  hover:text-white transition-colors">
                                        Woocommerce
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="  hover:text-white transition-colors">
                                        Brand Image
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Us Section */}
                        <div className="roboto-regular">
                            <h3 className="text-white text-lg poppins-bold mb-4">
                                CONTACT US
                                <div className="before:content-[''] relative before:absolute before:w-[60px] before:h-[3px] before:bg-[#94c045] w-full h-[3px] bg-[#3c4133] mt-2"></div>
                            </h3>
                            <div className="space-y-2  ">
                                <p>A108 Adam Street</p>
                                <p>New York, NY 535022</p>
                                <p>United States</p>
                                <p className="mt-3">
                                    <span className="font-semibold text-white">Phone:</span> +1 5589 55488 55
                                </p>
                                <p>
                                    <span className="font-semibold text-white">Email:</span> info@example.com
                                </p>
                            </div>

                            {/* Social Media Icons */}
                            <div className="flex space-x-4 mt-6">
                                <a href="#" className=" w-[36px] h-[36px] duration-500 hover:bg-[#ffbd39] rounded-full flex justify-center items-center bg-[#3c4133] hover:text-white transition-colors">
                                    <FacebookIcon size={15} fill="white" />
                                </a>
                                <a href="#" className=" w-[36px] h-[36px] duration-500 hover:bg-[#ffbd39] rounded-full flex justify-center items-center bg-[#3c4133] hover:text-white transition-colors">
                                    <Twitter size={15} fill="white" />
                                </a>
                                <a href="#" className=" w-[36px] h-[36px] duration-500 hover:bg-[#ffbd39] rounded-full flex justify-center items-center bg-[#3c4133] hover:text-white transition-colors">
                                    <Instagram size={15} />
                                </a>
                                <a href="#" className=" w-[36px] h-[36px] duration-500 hover:bg-[#ffbd39] rounded-full flex justify-center items-center bg-[#3c4133] hover:text-white transition-colors">
                                    <LinkedinIcon size={15} />
                                </a>

                            </div>
                        </div>

                    </div>
                </div>

            </CenterAlign>
        </footer>
    );
};

export default Footer;