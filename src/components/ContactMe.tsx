import CoverButton from "./sub-components/CoverButton";
import CenterAlign from "./utils/CenterAlign";
import SectionTittle from "./utils/SectionTittle";



const ContactMe = () => {
    const tittle = "Contact Me"
    const heading = "Etiam suscipit ante at sem facilisis, id sagittis nunc aliquet. Vivamus sodales elementum pharetra. Cras dignissim justo eu accumsan vulputate."

    return (
        <div id="CONTACT" className="bg-[#312f30] pb-[40px] md:pb-[100px] pt-[40px] md:pt-[100px]">
            <SectionTittle tittle={tittle} heading={heading} />
            <CenterAlign>
                <div className=" flex items-center justify-center ">
                    <form className="w-full max-w-3xl text-gray-300">
                        {/* Row 1 - Name & Email */}
                        <div className="flex flex-col md:flex-row gap-4 mb-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="flex-1 bg-[#333] focus:border-white duration-500 text-gray-300 placeholder-gray-500 border border-gray-500 text-sm px-4 py-3 focus:outline-none"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="flex-1 bg-[#333] focus:border-white duration-500 text-gray-300 placeholder-gray-500 border border-gray-500 text-sm px-4 py-3 focus:outline-none"
                            />
                        </div>

                        {/* Subject */}
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Your Subject"
                                className="w-full bg-[#333] focus:border-white duration-500 text-gray-300 placeholder-gray-500 border border-gray-500 text-sm px-4 py-3 focus:outline-none"
                            />
                        </div>

                        {/* Message */}
                        <div className="mb-6">
                            <textarea
                                placeholder="Your Message"
                                rows={5}
                                className="w-full bg-[#333] text-gray-300 placeholder-gray-500 border border-gray-500 text-sm px-4 py-3 focus:outline-none focus:border-white duration-500 resize-none"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="text-white">  <CoverButton bg="#7c68ee" text="Submit" /></div>
                    </form>
                </div>
            </CenterAlign>
        </div>
    );
};

export default ContactMe;