import AboutMe from "../components/AboutMe";
import Cover from "../components/Cover";
import Nav from "../components/Nav";
import Resume from "../components/Resume";
import Service from "../components/Service";



const Home = () => {
    return (
        <div>
            <Nav />
            <Cover />
            <AboutMe />
            {/* <Service />
            <Resume /> */}
        </div>
    );
};

export default Home;