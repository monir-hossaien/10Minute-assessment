import Image from "next/image";
import {CheckListValue} from "@/types/type";


type Props = {
    values: CheckListValue[];
};

const CheckLists = ({ values }: Props) => {
    if (!values || values.length === 0) return null;

    return (
        <div className="mt-4">
            <h2 className="text-lg text-[#111827] font-semibold leading-[24px]">এই কোর্সে যা থাকছে</h2>
            <ul className="mt-4 space-y-3">
                {values.map((item) => {
                    const { id, text, icon, color } = item;
                    return (
                        <li key={id} className="flex items-center text-[#111827] gap-4">
                            <Image src={icon} alt="icon" width={20} height={20} />
                            <p className={`${color} leading-[20px]`}>{text}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default CheckLists;
