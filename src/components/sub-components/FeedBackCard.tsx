import { Star } from "lucide-react";

const FeedBackCard = ({
  data,
}: {
  data: {
    name: string;
    media: string;
    feedback: string;
    star: number;
    image: string;
  };
}) => {
  return (
    <div className="w-[470px] shrink-0 bg-[#136c64] text-white px-[30px] py-[22px] relative transition-all duration-500">
      <h1 className="poppins-bold text-[22px]">{data.name}</h1>
      <h2 className="text-[14px] poppins-medium mt-[2px] mb-[8px]">
        {data.media}
      </h2>
      <p className="roboto-regular text-base text-[#ccc]">{data.feedback}</p>

      <div className="flex justify-start items-center gap-1 mt-[10px]">
        {Array(data.star)
          .fill(0)
          .map((_, idx) => (
            <Star key={idx} size={15} fill="#febd45" className="text-[#febd45]" />
          ))}
      </div>

      <div className="absolute -bottom-[118px] left-0 w-[100px] h-[100px]">
        <img src={data.image} alt="user" className="w-full h-full rounded-full" />
      </div>
    </div>
  );
};

export default FeedBackCard;
