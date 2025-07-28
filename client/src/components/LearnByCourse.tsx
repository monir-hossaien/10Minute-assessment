import { IoMdCheckmark } from "react-icons/io";
import { PointersValue } from "@/types/type";

type Props = {
    value?: PointerProps;
};

type PointerProps = {
    type?: string;
    name?: string;
    values?: PointersValue[];
};

const LearnByCourse = ({ value }: Props) => {
    if (!value || !value.values || value.values.length === 0) return null;

    const pointers = value.values;

    return (
        <div className="py-5">
            <h1 className="mb-4 font-semibold text-2xl text-[#111827] leading-[32px]">{value?.name}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 border border-gray-200 rounded-md p-8">
                {pointers.map(({ id, text }) => (
                    <div key={id} className="flex gap-3 items-start">
                        <div className="p-1">
                            <IoMdCheckmark className="text-[#6294F8] w-5 h-5" aria-hidden="true" />
                        </div>
                        <p className="text-[#111827] text-base font-normal leading-[24px]">{text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LearnByCourse;
