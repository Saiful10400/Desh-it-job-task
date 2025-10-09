import AboutMe from "../components/AboutMe";
import Cover from "../components/Cover";
import Nav from "../components/Nav";
import Portfolio from "../components/Portfolio";
import Portfoliov2 from "../components/Portfoliov2";


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
            <div className="max-w-[1350px] mx-auto px-4">
                {/* <Portfolio /> */}
                <Portfoliov2/>
            </div>
        </div>
    );
};

export default Home;