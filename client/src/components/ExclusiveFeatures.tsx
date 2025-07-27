import { IoMdCheckmark } from "react-icons/io";
import Image from "next/image";
import {ExclusiveFeatureSValue} from "@/types/type";

type Props = {
    value?: exclusiveFeaturesProps;
};

type exclusiveFeaturesProps = {
    type?: string;
    name?: string;
    values?: ExclusiveFeatureSValue[];
};

const ExclusiveFeatures = ({value}: Props) => {

    if (!value || !value.values || value.values.length === 0) return null;

    const exclusiveFeatures = value.values;

    return (
        <div className="py-5">
            <h1 className="mb-6 font-semibold text-2xl text-[#111827] leading-[32px]">
                {value?.name}
            </h1>

            <div className="border border-gray-200 divide-y divide-gray-300 px-6">
                {exclusiveFeatures.map(({ id, title, file_type, file_url, checklist }) => (
                    <div key={id} className="py-6">
                        <div>
                            <div className="flex justify-between items-center">
                                <div>
                                    <h2 className="mb-2">{title}</h2>
                                    <ul className="space-y-3 w-full md:w-2/3">
                                        {checklist.map((point, index) => (
                                            <li key={index} className="flex gap-2 items-start">
                                                <IoMdCheckmark className="text-[#6294F8] w-5 h-5 mt-1"/>
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="w-full md:w-1/3">
                                    <Image
                                        src={file_url}
                                        alt={file_type}
                                        width={200}
                                        height={200}
                                        className="object-contain"
                                        placeholder="blur"
                                        blurDataURL="/blur.webp"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExclusiveFeatures;
