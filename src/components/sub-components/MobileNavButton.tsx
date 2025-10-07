import { Menu, X } from "lucide-react";
import { useState } from "react";



const MobileNavButton = () => {

    const [clicked, setClicked] = useState(false)


    return (
        <div className="lg:hidden">
            <button onClick={() => setClicked(p => !p)} className="border border-white px-[10px] py-[7px]">{clicked ? <X /> : <Menu />}</button>


        </div>
    );
};

export default MobileNavButton;