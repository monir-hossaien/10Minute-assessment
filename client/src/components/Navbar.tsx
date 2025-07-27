import Image from "next/image";
import Link from "next/link";
import {navItems} from "@/constants";
import logo from "../../public/images/10mslogo-svg.svg"

const Navbar = () => {
    return (
        <header className="shadow-sm sticky top-0 bg-white z-50">
            <nav className="py-5 flex items-center justify-between container">
                {/*logo*/}
                <div>
                <Image
                    src={logo}
                    width={100}
                    height={100}
                    alt="logo"
                />
                </div>

                {/*menu item*/}
                <div>
                    <ul className="flex items-center gap-5">
                        {
                            navItems.map((item, index) => {
                                const { label, path} = item
                                return (
                                    <li key={index}><Link href={path}>{label}</Link></li>
                                )
                            })
                        }
                    </ul>
                </div>

                <div>
                    <button className="px-6 py-1 bg-[#1CAB55] text-white rounded-md cursor-pointer">Login</button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;