import { useState } from "react";
import AboutMe from "../components/AboutMe";
import Blog from "../components/Blog";
import ContactMe from "../components/ContactMe";
import CopyRight from "../components/CopyRight";
import Cover from "../components/Cover";
import FeedBack from "../components/FeedBack";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Portfolio from "../components/Portfolio";
import Resume from "../components/Resume";
import Service from "../components/Service";
import PortfolioImageFullScreen from "../components/sub-components/PortfolioImageFullScreen";
import ScrollToTop from "../components/sub-components/ScrollToTop";




const Home = () => {

    const [Fullscreen, setFullscreen] = useState<boolean>(false)


    return (
        <div>
            <Nav />
            <Cover />
            <AboutMe />
            <Service />
            <Resume />
            <Portfolio fullscreenFn={setFullscreen} />
            <FeedBack />
            <Blog />
            <ContactMe />
            <Footer />
            <CopyRight />
            <PortfolioImageFullScreen fullscreenFn={setFullscreen} isActive={Fullscreen} />
            <ScrollToTop />
        </div>
    );
};

export default Home;