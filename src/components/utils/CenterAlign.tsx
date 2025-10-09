import type React from "react";



const CenterAlign = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="max-w-[1350px] mx-auto px-4">
            {children}
        </div>
    );
};

export default CenterAlign;