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
        // handleScroll()
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    console.log(scrollY)
    return (
        <div className="relative">
            <div className="z-50 relative"><NavUi /></div>
            <div aria-disabled style={{ boxShadow: "2px 4px 8px rgba(140, 129, 129, 0.25)" }} className={`${scrollY >= 150 ? "translate-y-0 fixed top-0 transition-all duration-1000" : "-translate-y-16 "} w-full bg-[#333333] z-50`}>
                <NavUi />
            </div>
        </div>
    );
};

export default Nav;

// 