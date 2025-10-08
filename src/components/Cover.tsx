import modelImage from "../assets/cover/model.webp"
const Cover = () => {
    return (
        <div>
            {/* cover text and buttons. */}
            <div className="flex flex-col gap-[30px]">
                <h3 className="text-[20px] text-[#ffbd39] poppins-bold">Hello !</h3>
                <p className="text-[30px] leading-[36px] poppins-bold">I'm Professional Web Designer &<br /> <span className="text-[#ffba3a]">Wordpress Developer</span></p>
                <p className="text-lg roboto-regular">It is a long established fact that a reader will be distracted by the readable <br /> content of a page when looking at its layout.</p>
            </div>

            {/* cover model image. */}
            <img src={modelImage} alt="model image." />
        </div>
    );
};

export default Cover;