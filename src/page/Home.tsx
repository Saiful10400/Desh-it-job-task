import AboutMe from "../components/AboutMe";
import Blog from "../components/Blog";
import ContactMe from "../components/ContactMe";
import Cover from "../components/Cover";
import Footer from "../components/Footer";
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
            <ContactMe/>
            <Footer/>
        </div>
    );
};

export default Home;