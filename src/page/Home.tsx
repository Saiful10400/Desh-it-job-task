import AboutMe from "../components/AboutMe";
import Cover from "../components/Cover";
import Nav from "../components/Nav";
import Service from "../components/Service";
 


const Home = () => {
    return (
        <div>
            <Nav />
            <Cover />
            <AboutMe />
            <Service/>
        </div>
    );
};

export default Home;