import { useState } from "react";


const Portfolio = () => {



    const imageArr = [
        {
            id: 1,
            link: "https://img.freepik.com/free-photo/islamic-ramadan-celebration-lantern-fantasy-style_23-2151241601.jpg",
        },
        {
            id: 2,
            link: "https://static.vecteezy.com/system/resources/thumbnails/045/711/504/small_2x/an-ornate-islamic-archway-and-glowing-lantern-against-a-blue-textured-wall-capturing-the-spirit-of-the-islamic-new-year-photo.JPG",
        },
        {
            id: 3,
            link: "https://media.istockphoto.com/id/938430448/photo/ornamental-arabic-lantern-with-burning-candle-glowing-at-night-and-glittering-golden-bokeh.jpg?s=612x612&w=0&k=20&c=kmjzVvjW4Ha_Ts-XUt0bQmIUsFpYq8uGLySUG6YXGBU=",
        },
        {
            id: 4,
            link: "https://media.gettyimages.com/id/1001021150/photo/muslim-man-is-praying-in-mosque.jpg?s=612x612&w=gi&k=20&c=QFnN9KhLUEMefRYcSi2W-st-l3zjA-XlhQH8wm6jfWE=",
        },
        {
            id: 5,
            link: "https://cdn.pixabay.com/photo/2015/08/11/16/27/islam-884825_1280.jpg",
        },
        {
            id: 6,
            link: "https://images.pexels.com/photos/2233416/pexels-photo-2233416.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
    ];
    const [filterData, setFilterData] = useState(imageArr)


    // top bottom setter.
    const topLeftSetter = (index: number) => {
        console.log(index)
        if (index >= 3) return { top: "220px", left: (index - 3) * 400 + "px" }
        return { top: 0, left: index * 400 + "px" }

    }

    const filterhandle = () => {
        const filtered = imageArr.filter(img => img.id % 2 === 0)
        setFilterData(filtered)
    }

    const isIncluded = (id: number) => {
        if (!filterData.find(img => img.id === id)) {
            return false
        } else {
            return true
        }
    }

     
    return (
        <div className="min-h-screen">
            <h1>{filterData.length}</h1>
            <button onClick={filterhandle} className="bg-yellow-900 p-2">filter</button>
            <div className="relative">
                {
                    imageArr.map((img, index) => {

                        return <div style={topLeftSetter(index)} className={`w-[400px] absolute h-[200px] transition-all duration-300 ${isIncluded(img.id) ? "scale-100" : "scale-0"} p-2`} key={index}>
                            <img className="w-full h-full" src={img.link} key={index} alt="image" />
                            {/* <span className="relative"> <span className="absolute top-3 left-3 text-white text-3xl font-bold">{index}</span></span> */}
                        </div>
                    })
                }</div>
        </div>
    );
};

export default Portfolio;