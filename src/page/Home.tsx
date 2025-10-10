import AboutMe from "../components/AboutMe";
import Blog from "../components/Blog";
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
            <Service />
            <Resume />
            <Blog/>
        </div>
    );
};

export default Home;