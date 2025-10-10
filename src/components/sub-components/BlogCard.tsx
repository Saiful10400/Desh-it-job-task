import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const BlogCard = ({ data }: { data: { img: string, name: string, designation: string, desc: string } }) => {
    return (
        <div style={{ boxShadow: "0px 3px 13px #443f3fe6" }} className=" bg-[#333333] text-white shadow-lg overflow-hidden">
            {/* Image Section */}
            <div className="relative h-[378px] w-full group overflow-hidden">
                {/* hover layer. */}
                <div className="bg-[#00000080] absolute z-10 top-0 left-0 w-full h-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                <img
                    src={data.img}
                    alt="Blog Thumbnail"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="roboto-semibold text-sm absolute top-3 left-3 bg-[#f9b233] text-white text-center h-[58px] w-[58px] flex flex-col justify-center items-center ">
                    <p>8</p>
                    <p>Feb</p>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-5 text-[#ccc]">
                <h3 className="text-[20px] poppins-bold mb-1">{data.name}</h3>
                <p className="text-sm mb-3 text-[15px] roboto-light">
                    {data.designation}
                </p>
                <p className="text-[16px] roboto-regular mb-4 leading-relaxed">
                    {data.desc}
                </p>
                <a
                    href="#"
                    className="text-[16px] group roboto-regular "
                >
                    <span className="group-hover:text-white transition duration-300">Read More</span> <span className="group-hover:translate-x-3 ease-in-out transition duration-500 inline-block"><FontAwesomeIcon size="xs" icon={faLongArrowAltRight} /></span>
                </a>
            </div>
        </div>
    );
};

export default BlogCard;