import ResumeCard from "./ResumeCard";



const ResumeSection = ({ tittle, data, className }: {className?:string, tittle: string, data: { tittle: string, designation: string, desc: string, year: string }[] }) => {
    return (
        <div className={className}>
            <h1 className="text-center text-[32px] poppins-bold text-[#ccc] mb-[32px]">{tittle}</h1>
            <div className="grid grid-cols-3 gap-[24px]">
                {data?.map((item, key) => <ResumeCard data={item} key={key} />)}
            </div>
        </div>
    );
};

export default ResumeSection;