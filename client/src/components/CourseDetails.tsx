"use client";

import { useState } from "react";
import parse from "html-react-parser";
import {
    MdOutlineKeyboardArrowDown
} from "react-icons/md";
import {DetailsValue} from "@/types/type";

type Props = {
    value?: DetailsProps;
};

type DetailsProps = {
    type?: string;
    name?: string;
    values?: DetailsValue[];
};


const CourseDetails = ({value}: Props) => {

    if (!value || !value.values || value.values.length === 0) return null;
    const details = value.values;


    const [activeIndex, setActiveIndex] = useState<string | null>(details[0].id);

    const toggleAccordion = (id: string) => {
        setActiveIndex((prev) => (prev === id ? null : id));
    };

    return (
        <div className="py-5 max-h-fit">
            <h3 className="text-2xl font-semibold md:mb-6">{value?.name}</h3>

            <div className="divide-y divide-gray-300 divide-dotted rounded-md md:border border-gray-200 md:px-6">
                {details.map((item) => {
                    const {id, title, description} = item
                    const isOpen = activeIndex === id;
                    return (
                        <div key={id} className="py-3 md:py-5 transition-all duration-200">
                            {/* Hero */}
                            <button
                                onClick={() => toggleAccordion(id)}
                                className="flex w-full items-center justify-between text-left cursor-pointer group min-h-[30px]"
                            >
                                <div className="text-sm md:text-lg text-gray-800">
                                    {parse(title)}
                                </div>
                                <span
                                    className={`text-xl text-gray-600 transition-transform duration-300 transform group-hover:text-gray-900 ${
                                        isOpen ? "rotate-180" : "rotate-0"
                                    }`}
                                >
                                    <MdOutlineKeyboardArrowDown className="h-5 w-5" />
                                </span>

                            </button>

                            {/* Description */}
                            {isOpen && (
                                <div
                                    className="mt-3 text-gray-700 leading-relaxed space-y-2 px-4"
                                >
                                    {parse(description)}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CourseDetails;
