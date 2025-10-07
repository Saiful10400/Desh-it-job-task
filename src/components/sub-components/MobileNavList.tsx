

const MobileNavList = ({ clicked }: { clicked: boolean }) => {
    // const navRoutes = ["HOME"]
    const navRoutes = ["HOME", "ABOUT", "SERVICES", "RESUME", "PORTFOLIO", "BLOG", "CONTACT"]
    return (
        <ul className={`lg:hidden ${clicked ? "max-h-96" : "max-h-0"} duration-700 overflow-hidden`}>
            {navRoutes.map(route => (<li className={` mt-[2px]`}><a className="bg-[#0c1922] text-[14px]  p-[10px] inline-block w-full" href={"#" + route}>{route}</a></li>))}
        </ul>
    );
};

export default MobileNavList;