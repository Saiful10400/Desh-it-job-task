import { useState, type MouseEvent } from "react";
// Use React.MouseEvent instead of DOM MouseEvent



const CoverButton = ({text,bg}:{text:string,bg:string}) => {
    const [entered, setEntered] = useState(false)
    const [x, setX] = useState(0)
    const [y, sety] = useState(0)

    // handle mouse move.
    const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
        console.log(e.currentTarget.getBoundingClientRect(), "event:clientx-", e.clientX)
        const left = e.clientX - e.currentTarget.getBoundingClientRect().left
        const top = e.clientY - e.currentTarget.getBoundingClientRect().top
        setX(left)
        sety(top)
        

    }

    return (
        <div>
            <button style={{background:bg}} onMouseMove={handleMouseMove} onMouseLeave={() => setEntered(false)} onMouseEnter={() => setEntered(true)} className=" overflow-hidden py-3 px-[40px] roboto-semibold cursor-pointer relative ">
                <span className="relative z-10 ">{text}</span>
                <span style={{ left: x - 50 + "px", top: y - 50 + "px" }} className={`w-[100px] absolute z-0 h-[100px] ${entered ? "scale-[700%]" : "scale-0"} duration-700 transition-transform rounded-full bg-[#3e56d0] mt-4`}></span>

            </button>

        </div>
    );
};

export default CoverButton;