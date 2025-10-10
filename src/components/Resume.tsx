import ResumeSection from "./sub-components/ResumeSection";
import CenterAlign from "./utils/CenterAlign";
import SectionTittle from "./utils/SectionTittle";



const Resume = () => {

    const EducaitonDemoData = [
        {
            tittle: "Computer Science",
            designation: "International University",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consectetur ut lorem vitae ultricies. Integer porta, libero sit amet pretium lobortis",
            year: "2001 - 2005"
        },
        {
            tittle: "Bachelor Degree",
            designation: "International University",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consectetur ut lorem vitae ultricies. Integer porta, libero sit amet pretium lobortis",
            year: "2006 - 2010"
        },
        {
            tittle: "Master Degree",
            designation: "International University",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consectetur ut lorem vitae ultricies. Integer porta, libero sit amet pretium lobortis",
            year: "2011 - 2015"
        },
    ]
    const ExperienceDemoData = [
        {
            tittle: "Jr. UI UX Designer",
            designation: "IThemeforest",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consectetur ut lorem vitae ultricies. Integer porta, libero sit amet pretium lobortis",
            year: "2016 - 2017"
        },
        {
            tittle: "Web Designer",
            designation: "ThemeForest",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consectetur ut lorem vitae ultricies. Integer porta, libero sit amet pretium lobortis",
            year: "2018 - 2019"
        },
        {
            tittle: "Web Developer",
            designation: "Envato",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consectetur ut lorem vitae ultricies. Integer porta, libero sit amet pretium lobortis",
            year: "2020 - Present"
        },
    ]


    const tittle = "Our Resume"
    const heading = "Etiam suscipit ante at sem facilisis, id sagittis nunc aliquet. Vivamus sodales elementum pharetra. Cras dignissim justo eu accumsan vulputate."
    return (
        <div id="RESUME" className="bg-[#312f30] pb-[40px] md:pb-[100px] pt-[40px] md:pt-[100px]">
            <SectionTittle tittle={tittle} heading={heading} />
            <CenterAlign>
                <ResumeSection data={EducaitonDemoData} tittle="My Education" />
                <ResumeSection className="mt-[72px]" data={ExperienceDemoData} tittle="My Experience" />
            </CenterAlign>
        </div>
    );
};

export default Resume;