import React from 'react';
import Image from "next/image";
import { InstructorValue } from "@/types/type";
import parse from "html-react-parser";

type Props = {
    value?: InstructorProps;
};

type InstructorProps = {
    type?: string;
    name?: string;
    values?: InstructorValue[];
};

const Instructor = ({ value }: Props) => {
    if (!value || !value.values || value.values.length === 0) return null;

    const instructor = value.values[0];
    const { image, name, description } = instructor;

    return (
        <section className="container py-5 md:py-10" aria-labelledby="instructor-heading">
            <h2
                id="instructor-heading"
                className="font-semibold text-2xl leading-[32px] text-[#111827] mb-5"
            >
                {value?.name}
            </h2>
            <div className="md:border border-gray-200 rounded-md md:px-4 md:py-8 flex items-center gap-5">
                <Image
                    src={image}
                    width={80}
                    height={80}
                    alt={`Photo of instructor ${name}`}
                    className="rounded-full"
                />
                <div>
                    <h3 className="font-semibold">{name}</h3>
                    <div>{description ? parse(description) : null}</div>
                </div>
            </div>
        </section>
    );
};

export default Instructor;
