import AboutMe from "../components/AboutMe";
import Cover from "../components/Cover";
import Nav from "../components/Nav";
import Portfoliov2 from "../components/Portfoliov2";


const Home = () => {
    return (
        <div className="">
            <Nav />
            <div className="max-w-[1350px] mx-auto px-4">

                <Cover />
            </div>
            <div className=" bg-[#312f2f]">
                <AboutMe />
            </div>
            <div className="max-w-[1350px] mx-auto px-4">
                {/* <Portfolio /> */}
                <Portfoliov2 />
            </div>
        </div>
    );
};

export default Home;