import CenterAlign from "./utils/CenterAlign";


const CopyRight = () => {

    return (
        <div className="bg-[#312f30] py-[25px]">
            <CenterAlign>
                <h1 className="text-center text-[15px] roboto-regular text-[#ccc]">@ Copyright <span className="roboto-bold">CodexUnicTheme</span> | All Rights Reserved</h1>
            </CenterAlign>
        </div>
    );
};

export default CopyRight;