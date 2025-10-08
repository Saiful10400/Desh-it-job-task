import { useEffect, useState } from "react";


const AboutMeAchivement = () => {

    const [client, setClient] = useState(0)
    const [sales, setSales] = useState(300)
    const [project, setProjects] = useState(0)
    const [experience, setExperience] = useState(0)

    useEffect(() => {
        const clientInterval = setInterval(() => {
            setClient(p => p + 1)
        }, 1);

        if (client === 599) {
            clearInterval(clientInterval)
        }

        return () => clearInterval(clientInterval)
    }, [client])

    useEffect(() => {
        const projectInterval = setInterval(() => {
            setProjects(p => p + 10)
        }, 1);

        if (project === 5000) {
            clearInterval(projectInterval)
        }

        return () => clearInterval(projectInterval)
    }, [project])

    useEffect(() => {
        const salesInterval = setInterval(() => {
            setSales(p => p + 3)
        }, 1);

        if (sales === 2001) {
            clearInterval(salesInterval)
        }

        return () => clearInterval(salesInterval)
    }, [sales])

    useEffect(() => {
        const expInterval = setInterval(() => {
            setExperience(p => p + 1)
        }, 220);

        if (experience === 6) {
            clearInterval(expInterval)
        }

        return () => clearInterval(expInterval)
    }, [experience])

 
    return (
        <div className="flex justify-end flex-wrap gap-[25px] text-white min-w-[42%] mb-5">
            <div className="w-[250px] h-[140px] bg-[#3e3c3d] flex flex-col justify-center items-center">
                <span className="text-[40px] poppins-bold">{client}</span>
                <span className="text-[16px] text-[#ccc]">Happy Client</span>
            </div>
            <div className="w-[250px] h-[140px] bg-[#3e3c3d] flex flex-col justify-center items-center">
                <span className="text-[40px] poppins-bold">{sales}</span>
                <span className="text-[16px] text-[#ccc]">Sales</span>
            </div>
            <div className="w-[250px] h-[140px] bg-[#3e3c3d] flex flex-col justify-center items-center">
                <span className="text-[40px] poppins-bold">{project}</span>
                <span className="text-[16px] text-[#ccc]">Projects Complete</span>
            </div>
            <div className="w-[250px] h-[140px] bg-[#3e3c3d] flex flex-col justify-center items-center">
                <span className="text-[40px] poppins-bold">{experience}</span>
                <span className="text-[16px] text-[#ccc]">Experience</span>
            </div>
        </div>
    );
};

export default AboutMeAchivement;