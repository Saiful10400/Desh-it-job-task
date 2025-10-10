import FeedbackCarosel from "./sub-components/FeedbackCarosel";
import CenterAlign from "./utils/CenterAlign";
import SectionTittle from "./utils/SectionTittle";



const FeedBack = () => {
    const tittle = "Our Client Feadback"
    const heading = "Etiam suscipit ante at sem facilisis, id sagittis nunc aliquet. Vivamus sodales elementum pharetra. Cras dignissim justo eu accumsan vulputate."
    return (
        <div className="bg-[#312f30] pb-[40px] md:pb-[100px] pt-[40px] md:pt-[100px]">
            <SectionTittle tittle={tittle} heading={heading} />
            <CenterAlign>

                <FeedbackCarosel />

            </CenterAlign>
        </div>
    );
};

export default FeedBack;