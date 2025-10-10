import { useEffect, useRef, useState } from "react";


const AboutMeAchivement = () => {

    // intersectior observer.
    const clientRef = useRef(null)
    const salestRef = useRef(null)
    const projectRef = useRef(null)
    const experienceRef = useRef(null)
    const [interSecting, setIntersecting] = useState<string[]>([])
    const [counted, setCounted] = useState<string[]>([])
    useEffect(() => {
        const observerCallback: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIntersecting(p => [...p, entry.target.id]);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, {
            root: null,
            threshold: 0.1,
        });

        const targets = [clientRef, salestRef, projectRef, experienceRef];

        targets.forEach((ref) => ref.current && observer.observe(ref.current));

        return () => {
            observer.disconnect();
        };
    }, []);


    const [client, setClient] = useState(0)
    const [sales, setSales] = useState(300)
    const [project, setProjects] = useState(0)
    const [experience, setExperience] = useState(0)

    useEffect(() => {
        if (!interSecting.includes("client") || counted.includes("client")) return
        const clientInterval = setInterval(() => {
            setClient(p => p + 1)
        }, 1);

        if (client === 599) {
            clearInterval(clientInterval)
            setCounted(p => [...p, "client"])
        }

        return () => clearInterval(clientInterval)
    }, [client, interSecting, counted])

    useEffect(() => {
        if (!interSecting.includes("project") || counted.includes("project")) return
        const projectInterval = setInterval(() => {
            setProjects(p => p + 10)
        }, 1);

        if (project === 5000) {
            clearInterval(projectInterval)
            setCounted(p => [...p, "project"])
        }

        return () => clearInterval(projectInterval)
    }, [project, counted, interSecting])

    useEffect(() => {
        if (!interSecting.includes("sales") || counted.includes("sales")) return
        const salesInterval = setInterval(() => {
            setSales(p => p + 3)
        }, 1);

        if (sales === 2001) {
            clearInterval(salesInterval)
            setCounted(p => [...p, "sales"])
        }

        return () => clearInterval(salesInterval)
    }, [sales, counted, interSecting])

    useEffect(() => {
        if (!interSecting.includes("exp") || counted.includes("exp")) return
        const expInterval = setInterval(() => {
            setExperience(p => p + 1)
        }, 220);

        if (experience === 6) {
            clearInterval(expInterval)
            setCounted(p => [...p, "exp"])
        }

        return () => clearInterval(expInterval)
    }, [experience, counted, interSecting])



    console.log(interSecting)


    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-[25px] text-white w-full lg:min-w-[42%] mb-5">
            <div className="w-full h-[140px] bg-[#3e3c3d] flex flex-col justify-center items-center">
                <span className="text-[40px] poppins-bold">{client}</span>
                <span id="client" ref={clientRef} className="text-[16px] text-[#ccc]">Happy Client</span>
            </div>
            <div className="w-w-full h-[140px] bg-[#3e3c3d] flex flex-col justify-center items-center">
                <span className="text-[40px] poppins-bold">{sales}</span>
                <span id="sales" ref={salestRef} className="text-[16px] text-[#ccc]">Sales</span>
            </div>
            <div className="w-w-full h-[140px] bg-[#3e3c3d] flex flex-col justify-center items-center">
                <span className="text-[40px] poppins-bold">{project}</span>
                <span id="project" ref={projectRef} className="text-[16px] text-[#ccc]">Projects Complete</span>
            </div>
            <div className="w-w-full h-[140px] bg-[#3e3c3d] flex flex-col justify-center items-center">
                <span className="text-[40px] poppins-bold">{experience}</span>
                <span id="exp" ref={experienceRef} className="text-[16px] text-[#ccc]">Experience</span>
            </div>
        </div>
    );
};

export default AboutMeAchivement;