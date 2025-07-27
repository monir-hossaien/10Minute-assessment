import Image from "next/image";
import {FeaturesValue} from "@/types/type";

type Props = {
    value?: FeatureProps;
};

type FeatureProps = {
    type?: string;
    name?: string;
    values?: FeaturesValue[];
};


const CourseLaidOut = ({value}: Props) => {

    if (!value || !value.values || value.values.length === 0) return null;

    const feature = value.values;

    return (
        <div>
            <h3 className="text-2xl font-semibold mb-4">{value?.name}</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 bg-black rounded-md px-5 py-8">
                {feature.map((item) => {
                    const {id, icon, title, subtitle} = item
                    return (
                        <div className="flex items-start gap-3 p-3 rounded-md" key={id}>
                            <div className="relative w-10 h-10 min-w-[40px]">
                                <Image
                                    src={icon}
                                    alt="icon"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div>
                                <h3 className="text-lg leading-[26px] mb-1 text-white">
                                    {title}
                                </h3>
                                <p className="text-sm  text-[#9ca3af] font-medium leading-[22px]">
                                    {subtitle}
                                </p>
                            </div>
                        </div>

                    )
                })}
            </div>
        </div>
    );
};

export default CourseLaidOut;
