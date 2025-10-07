
const Nav = () => {

    const navRoutes = ["HOME", "ABOUT", "SERVICES", "RESUME", "PORTFOLIO", "BLOG", "CONTACT"]

    return (
        <div className="flex justify-between items-center py-4">
            {/* logo */}
            <a href="#" className="text-[30px] poppins-black font-bold">CodeC</a>

            {/* nav route. */}
            <ul className="flex gap">
                {navRoutes.map((route) => (<li>
                    <a className="px-[18px] py-[10px] text-[15px] hover:text-white text-gray-300" href={route}>{route}</a>
                </li>))}
            </ul>
        </div>
    );
};

export default Nav;