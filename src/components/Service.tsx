
import ServiceCard from "./sub-components/ServiceCard";
import CenterAlign from "./utils/CenterAlign";
import SectionTittle from "./utils/SectionTittle";

const Service = () => {
    const demoData = [
        {
            tittle: "Web Design",
            desc: "In nisi tortor, consequat eu semper ut, consequat in massa. Maecenas at odio a felis commodo pulvinar quis eu neque.",
        },
        {
            tittle: "Web Development",
            desc: "In nisi tortor, consequat eu semper ut, consequat in massa. Maecenas at odio a felis commodo pulvinar quis eu neque.",
        },
        {
            tittle: "UI/UX Design",
            desc: "In nisi tortor, consequat eu semper ut, consequat in massa. Maecenas at odio a felis commodo pulvinar quis eu neque.",
        },
        {
            tittle: "App Design & Develop",
            desc: "In nisi tortor, consequat eu semper ut, consequat in massa. Maecenas at odio a felis commodo pulvinar quis eu neque.",
        },
        {
            tittle: "Graphic Design",
            desc: "In nisi tortor, consequat eu semper ut, consequat in massa. Maecenas at odio a felis commodo pulvinar quis eu neque.",
        },
        {
            tittle: "SEO Marketing",
            desc: "In nisi tortor, consequat eu semper ut, consequat in massa. Maecenas at odio a felis commodo pulvinar quis eu neque.",
        }
    ]
    const tittle = "Our Services"
    const heading = "Etiam suscipit ante at sem facilisis, id sagittis nunc aliquet. Vivamus sodales elementum pharetra. Cras dignissim justo eu accumsan vulputate."
    return (
        <CenterAlign>
            <SectionTittle tittle={tittle} heading={heading} />
            <div className="grid grid-cols-3 gap-[34px] pb-[100px]">
                {demoData?.map((item, key) => <ServiceCard data={item} key={key} />)}
            </div>
        </CenterAlign>
    );
};

export default Service;
