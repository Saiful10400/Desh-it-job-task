import Cover from "../components/Cover";
import Nav from "../components/Nav";


const Home = () => {
    return (
        <div className="max-w-[1350px] mx-auto px-4">
            <Nav />
            <Cover />
        </div>
    );
};

export default Home;