import { Menu, X } from "lucide-react";
import type React from "react";




const MobileNavButton = ({ tauglerFn, clicked }: { clicked: boolean, tauglerFn: React.Dispatch<React.SetStateAction<boolean>> }) => {




    return (
        <div className="lg:hidden">
            <button onClick={() => tauglerFn(p => !p)} className="border border-white px-[10px] py-[7px]">{clicked ? <X /> : <Menu />}</button>
        </div>
    );
};

export default MobileNavButton;