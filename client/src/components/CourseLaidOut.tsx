import Image from "next/image";
import { FeaturesValue } from "@/types/type";

type Props = {
    value?: FeatureProps;
};

type FeatureProps = {
    type?: string;
    name?: string;
    values?: FeaturesValue[];
};

const CourseLaidOut = ({ value }: Props) => {
    if (!value || !value.values || value.values.length === 0) return null;

    const feature = value.values;

    return (
        <section aria-labelledby="course-layout-heading" className="mb-8">

            <h3
                id="course-layout-heading"
                className="text-2xl font-semibold mb-4"
            >
                {value?.name}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-black rounded-md px-5 py-8">
                {feature.map(({ id, icon, title, subtitle }) => (

                    <article key={id} className="flex items-start gap-3 md:p-3 rounded-md">
                        <div className="relative w-10 h-10 min-w-[40px]">
                            <Image
                                src={icon}
                                alt={`${title} icon`}
                                fill
                                className="object-contain"
                                loading="lazy" // Lazy load non-critical images
                            />
                        </div>
                        <div>
                            <h4 className="text-lg leading-[26px] mb-1 text-white">{title}</h4>
                            <p className="text-sm text-[#9ca3af] font-medium leading-[22px]">{subtitle}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default CourseLaidOut;
