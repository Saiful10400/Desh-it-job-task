

const ResumeCard = ({ data }: { data: { tittle: string, designation: string, desc: string, year: string } }) => {
    return (
        <div className="bg-[#2c2c2c] text-white p-6 rounded-md shadow shadow-gray-500  border border-[#3a3a3a]">
            {/* Year Badge */}
            <div className="inline-block bg-[#f6b23e]  text-sm font-semibold px-3 py-1 rounded-full mb-3">
                {data.year}
            </div>

            {/* Title */}
            <h3 className="text-[22px] poppins-bold text-white leading-snug">
                {data.tittle}
            </h3>

            {/* Subtitle */}
            <p className="text-sm poppins-bold text-gray-400 mb-3">{data.designation}</p>

            {/* Description */}
            <p className="text-[16px] roboto-regular text-gray-300 leading-relaxed">
                {data.desc}
            </p>
        </div>
    );
};

export default ResumeCard;