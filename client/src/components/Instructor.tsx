import React from 'react';
import Image from "next/image";
import {InstructorValue} from "@/types/type";
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

    const {image, name, description} = instructor;

    return (
        <div className="container py-10">
            <h1 className="font-semibold text-2xl leading-[32px] text-[#111827] mb-5">{value?.name}</h1>
            <div className="border border-gray-200 rounded-md px-5 py-8 flex items-center gap-5">
                <div>
                    <Image
                        src={image}
                        width={80}
                        height={80}
                        alt="image"
                        className="rounded-full"
                        placeholder="blur"
                        blurDataURL="/blur.webp"
                    />
                </div>
                <div>
                    <h3 className="font-semibold">{name}</h3>
                    <div>
                        {parse(description)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instructor;
