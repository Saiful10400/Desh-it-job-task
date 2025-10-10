import { useState } from "react";

const imageArr = [
    {
        id: 1,
        category: "islamic",
        link: "https://img.freepik.com/free-photo/islamic-ramadan-celebration-lantern-fantasy-style_23-2151241601.jpg",
    },
    {
        id: 2,
        category: "",
        link: "https://static.vecteezy.com/system/resources/thumbnails/045/711/504/small_2x/an-ornate-islamic-archway-and-glowing-lantern-against-a-blue-textured-wall-capturing-the-spirit-of-the-islamic-new-year-photo.JPG",
    },
    {
        id: 3,
        category: "",
        link: "https://media.istockphoto.com/id/938430448/photo/ornamental-arabic-lantern-with-burning-candle-glowing-at-night-and-glittering-golden-bokeh.jpg?s=612x612&w=0&k=20&c=kmjzVvjW4Ha_Ts-XUt0bQmIUsFpYq8uGLySUG6YXGBU=",
    },
    {
        id: 4,
        category: "",
        link: "https://media.gettyimages.com/id/1001021150/photo/muslim-man-is-praying-in-mosque.jpg?s=612x612&w=gi&k=20&c=QFnN9KhLUEMefRYcSi2W-st-l3zjA-XlhQH8wm6jfWE=",
    },
    {
        id: 5,
        category: "",
        link: "https://cdn.pixabay.com/photo/2015/08/11/16/27/islam-884825_1280.jpg",
    },
    {
        id: 6,
        category: "islamic",
        link: "https://images.pexels.com/photos/2233416/pexels-photo-2233416.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
];

const Portfoliov2 = () => {
    const [images, setImages] = useState(imageArr)
    const [notIncludeId,setNotIncludeId]=useState<number[]>([])
console.log(notIncludeId)

    const placeMentDefiner = (index: number) => {
        return { left: (index >= 3 ? index - 3 : index) * 400 + "px", top: index >= 3 ? "220px" : "0px" }
    }

    const filterHdandle = () => {
        const filteredData = imageArr.filter(img => img.category === "islamic")
        const notIncluded = imageArr.filter(img => img.category !== "islamic")
        const notincIds=notIncluded.map(img=>img.id)
        setNotIncludeId(notincIds)
        setImages([...filteredData, ...notIncluded])
    }

    const allFilterHandle = () => {
        setNotIncludeId([])
        setImages(imageArr)
    }

    return (
        <>
            <button onClick={allFilterHandle} className="bg-green-700 py-2 px-3  cursor-pointer">all</button>
            <button onClick={filterHdandle} className="bg-green-700 py-2 px-3  cursor-pointer">islamic</button>
            <div className="min-h-screen relative">
                {
                    images.map((img, idx) => {
                        return (<img
                            key={img.id}
                            className={`w-[400px] h-[200px] absolute transition-all duration-500 ease-in-out `}
                            style={placeMentDefiner(idx)}
                            src={img.link}
                        />)
                    })
                }

            </div>
        </>

    );
};

export default Portfoliov2;   










