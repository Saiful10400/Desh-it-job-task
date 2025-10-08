import AboutMe from "../components/AboutMe";
import Cover from "../components/Cover";
import Nav from "../components/Nav";


const Home = () => {
    return (
        <div className="">
            <div className="max-w-[1350px] mx-auto px-4">
                <Nav />
                <Cover />
            </div>
            <div className=" bg-[#312f2f]">
                <AboutMe />
            </div>
        </div>
    );
};

export default Home;