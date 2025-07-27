import Navbar from "@/components/Navbar";
import {ReactNode} from "react";

type MasterLayoutProps = {
    children: ReactNode;
};

const MasterLayout = ({ children }: MasterLayoutProps) => {
    return (
        <div>
            <Navbar />
            <main>
                {children}
            </main>
        </div>
    );
};

export default MasterLayout;