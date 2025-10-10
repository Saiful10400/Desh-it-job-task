
import { faBullhorn, faGem, faLayerGroup, faPalette, faPencilRuler } from "@fortawesome/free-solid-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons/faLaptopCode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const ServiceCard = ({ data }: { data: { tittle: string, desc: string } }) => {

    const iconFinder = () => {
        if (data.tittle === "Web Design") return <FontAwesomeIcon size="2x" icon={faLaptopCode} />
        if (data.tittle === "Web Development") return <FontAwesomeIcon size="2x" icon={faLayerGroup} />
        if (data.tittle === "UI/UX Design") return <FontAwesomeIcon size="2x" icon={faPencilRuler} />
        if (data.tittle === "App Design & Develop") return <FontAwesomeIcon size="2x" icon={faGem} />
        if (data.tittle === "Graphic Design") return <FontAwesomeIcon size="2x" icon={faPalette} />
        if (data.tittle === "SEO Marketing") return <FontAwesomeIcon size="2x" icon={faBullhorn} />

    }


    return (
        <div className="group bg-[#262020] rounded-xl hover:-translate-y-3 duration-300 py-[40px] px-[26px] flex flex-col justify-center items-center text-center">
            <span style={{ borderRadius: "33% 66% 70% 30% / 49% 62% 38% 51%" }} className=" inline-flex justify-center items-center w-[100px] h-[100px] bg-[#ffbd3a] ">

                {iconFinder()}

            </span>
            <h1 className="mt-[25px] group-hover:text-[#ffbd39] mb-[10px] duration-500 transition-all text-[22px] poppins-bold">{data.tittle}</h1>
            <p className="text-[#ccc]">{data.desc}</p>
        </div>
    );
};

export default ServiceCard;