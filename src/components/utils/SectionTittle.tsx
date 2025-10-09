

const SectionTittle = ({ tittle, heading }: { tittle: string, heading: string }) => {



    return (
        <div className=" flex justify-center items-center flex-col mb-[50px] pt-[100px]">
            <h1 className="text-[30px] poppins-bold text-[#ccc]">{tittle}</h1>
            <span className="mt-[15px] w-[150px] h-[2px] bg-[#ffbd39] relative ">
                <span className="w-[16px] h-[16px] rounded-full bg-[#ffbd39] inline-flex absolute bottom-[-6px] left-[calc(75px-8px)] items-center justify-center">
                    <span className="w-[10px] h-[10px] rounded-full inline-block bg-white"></span>
                </span>
            </span>
            <p className="w-[856px] text-base text-center mt-3 roboto-regular text-[#ccc]">{heading}</p>
        </div>
    );
};

export default SectionTittle;