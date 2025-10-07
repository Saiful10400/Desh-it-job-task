import { useState } from "react";
import MobileNavButton from "./sub-components/MobileNavButton";
import MobileNavList from "./sub-components/MobileNavList";


const Nav = () => {
    const [clicked, setClicked] = useState(false)
    const navRoutes = ["HOME", "ABOUT", "SERVICES", "RESUME", "PORTFOLIO", "BLOG", "CONTACT"]

    return (
        <div>
            <div className="flex justify-between items-center py-[15px]">
                {/* logo */}
                <a href="#" className="text-[30px] poppins-black font-bold">CodeC</a>

                {/* nav route. */}
                <ul className=" gap lg:flex hidden">
                    {navRoutes.map((route) => (<li>
                        <a className="px-[18px] py-[10px] text-[15px] hover:text-white text-gray-300" href={"#" + route}>{route}</a>
                    </li>))}
                </ul>
                <MobileNavButton clicked={clicked} tauglerFn={setClicked} />
            </div>
            <MobileNavList clicked={clicked} />
        </div>
    );
};

export default Nav;