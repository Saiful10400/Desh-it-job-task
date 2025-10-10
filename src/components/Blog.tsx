import CenterAlign from "./utils/CenterAlign";
import SectionTittle from "./utils/SectionTittle";
import img1 from "../assets/blog/img1.webp"
import img2 from "../assets/blog/img2.webp"
import img3 from "../assets/blog/img3.webp"
import BlogCard from "./sub-components/BlogCard";


const Blog = () => {

    const blogDemoData = [
        {
            img: img1,
            name: "Sapien in Purus",
            designation: "by Admin / 2 Comments / Design",
            desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
        },
        {
            img: img2,
            name: "Data Science and Software",
            designation: "by Admin / 2 Comments / Design",
            desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
        },
        {
            img: img3,
            name: "Social Science & Humanities",
            designation: "by Admin / 2 Comments / Design",
            desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
        }
    ]



    const tittle = "Our Latest Blog"
    const heading = "Etiam suscipit ante at sem facilisis, id sagittis nunc aliquet. Vivamus sodales elementum pharetra. Cras dignissim justo eu accumsan vulputate."

    return (
        <div id="BLOG" className=" pb-[40px] md:pb-[100px] pt-[40px] md:pt-[100px]">
            <CenterAlign>
                <SectionTittle tittle={tittle} heading={heading} />
                <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-[34px]">
                    {blogDemoData?.map((item, key) => <BlogCard data={item} key={key} />)}
                </div>
            </CenterAlign>
        </div>
    );
};

export default Blog;