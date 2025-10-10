import AboutMe from "../components/AboutMe";
import Blog from "../components/Blog";
import ContactMe from "../components/ContactMe";
import CopyRight from "../components/CopyRight";
import Cover from "../components/Cover";
import FeedBack from "../components/FeedBack";
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
            <FeedBack />
            <Blog />
            <ContactMe />
            <Footer />
            <CopyRight />
        </div>
    );
};

export default Home;