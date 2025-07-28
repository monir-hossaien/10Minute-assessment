import { IoMdCheckmark } from "react-icons/io";
import Image from "next/image";
import { ExclusiveFeatureSValue } from "@/types/type";

type Props = {
    value?: ExclusiveFeaturesProps;
};

type ExclusiveFeaturesProps = {
    type?: string;
    name?: string;
    values?: ExclusiveFeatureSValue[];
};

const ExclusiveFeatures = ({ value }: Props) => {
    if (!value || !value.values || value.values.length === 0) return null;

    const exclusiveFeatures = value.values;

    return (
        <section aria-labelledby="exclusive-features-heading" className="py-5">
            <h2
                id="exclusive-features-heading"
                className="mb-6 font-semibold text-2xl text-[#111827] leading-[32px]"
            >
                {value?.name}
            </h2>

            <div className="border border-gray-200 divide-y divide-gray-300 px-6">
                {exclusiveFeatures.map(({ id, title, file_type, file_url, checklist }) => (
                    <article key={id} className="py-6">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                            <div className="md:w-2/3">
                                <h3 className="mb-2 text-lg font-semibold">{title}</h3>
                                {checklist && checklist.length > 0 && (
                                    <ul className="space-y-3">
                                        {checklist.map((point, idx) => (
                                            <li key={point ?? idx} className="flex gap-2 items-start">
                                                <IoMdCheckmark className="text-[#6294F8] w-5 h-5 mt-1" />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            <div className="md:w-1/3 w-full">
                                <Image
                                    src={file_url}
                                    alt={`Preview of ${title}`}
                                    width={200}
                                    height={200}
                                    className="object-contain"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default ExclusiveFeatures;
