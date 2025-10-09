import { useEffect, useState } from "react";
import NavUi from "./sub-components/NavUi";


const Nav = () => {

    // how muc i have scrolled.
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        const handleScroll = () => {

            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll()
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    console.log(scrollY)
    return (
        <div className="">
            <NavUi />
            <div className={`${scrollY >= 150 ? "opacity-100 translate-y-0 fixed top-0 z-50 transition-all duration-1000" : "-translate-y-10 opacity-0"} w-full bg-[#333333] drop-shadow-md drop-shadow-gray-500`}>
                <NavUi />
            </div>
        </div>
    );
};

export default Nav;

// 