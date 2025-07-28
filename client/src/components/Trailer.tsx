"use client"

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState} from "react";
import {IoMdPlay} from "react-icons/io";
import {MediaValue} from "@/types/type";
import Image from "next/image";

type Props = {
    values: MediaValue[];
};

const Trailer = ({values}: Props) => {


    const [currentIndex, setCurrentIndex] = useState(0);
    const currentItem = values[currentIndex];

    const goPrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? values.length - 1 : prev - 1));
    };

    const goNext = () => {
        setCurrentIndex((prev) => (prev === values.length - 1 ? 0 : prev + 1));
    };


    return (
        <div className="max-w-xl mx-auto py-5 md:p-1.5">
            {/* Preview */}
            <div className="relative aspect-video bg-black overflow-hidden">
                {currentItem.resource_type === "image" ? (
                    <Image
                        width={500}
                        height={280}
                        src={currentItem.resource_value}
                        alt={currentItem.resource_type}
                        className="object-cover"
                    />
                ) : (
                    <iframe
                        src={`https://www.youtube.com/embed/${currentItem.resource_value}`}
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        className="w-full h-full"
                    />
                )}

                {/* Slider Buttons */}
                <button
                    onClick={goPrev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow text-gray-400"
                >
                    <FaChevronLeft/>
                </button>
                <button
                    onClick={goNext}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow text-gray-400"
                >
                    <FaChevronRight/>
                </button>
            </div>

            {/* Thumbnails */}
            <div className="flex mt-4 space-x-2 overflow-hidden scrollbar-hide">
                {values.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-[58px] h-[33px] flex-shrink-0 border-2 rounded overflow-hidden cursor-pointer ${
                            index === currentIndex ? "border-green-500" : "border-transparent"
                        }`}
                    >
                        {item.resource_type === "image" ? (
                            <Image
                                width={58}
                                height={33}
                                src={item.resource_value}
                                alt={item.resource_type}
                                className="object-cover"
                            />
                        ) : (
                            <div className="relative w-full h-full">
                                <Image
                                    width={58}
                                    height={33}
                                    src={item.thumbnail_url}
                                    alt={item.resource_type}
                                    className="object-cover"
                                />
                                <IoMdPlay
                                    className="absolute inset-0 m-auto text-red-500 text-sm bg-white rounded-full p-1"/>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Trailer;