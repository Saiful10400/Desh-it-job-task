import { useState } from 'react';
import MobileNavButton from './MobileNavButton';
import MobileNavList from './MobileNavList';

const NavUi = () => {
    const [clicked, setClicked] = useState(false)
    const navRoutes = ["HOME", "ABOUT", "SERVICES", "RESUME", "PORTFOLIO", "BLOG", "CONTACT"]


    return (
        <div className='max-w-[1350px] mx-auto px-4 bg-[#333333]'>

            <div className="flex justify-between items-center py-[15px]">
                {/* logo */}
                <a href="#" className="text-[30px] poppins-black font-bold">CodeC</a>

                {/* nav route. */}
                <ul className=" gap lg:flex hidden">
                    {navRoutes.map((route) => (<li key={route}>
                        <a className="px-[18px] py-[10px] text-[15px] hover:text-white text-gray-300" href={route==="HOME"?"#":"#" + route}>{route}</a>
                    </li>))}
                </ul>
                <MobileNavButton clicked={clicked} tauglerFn={setClicked} />
            </div>
            <MobileNavList clicked={clicked} />
        </div>
    );
};

export default NavUi;
