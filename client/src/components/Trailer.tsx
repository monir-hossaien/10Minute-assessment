"use client"

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {useState} from "react";
import {IoMdPlay} from "react-icons/io";

const media = [
    {
        name: "preview_gallery",
        resource_type: "video",
        resource_value: "zrlYnaZftEQ",
        thumbnail_url: "https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png",
    },
    {
        name: "sqr_img",
        resource_type: "image",
        resource_value: "https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_1_1.png",
    },
    {
        name: "thumbnail",
        resource_type: "image",
        resource_value: "https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png",
    },
    {
        name: "preview_gallery",
        resource_type: "image",
        resource_value: "https://cdn.10minuteschool.com/images/catalog/media/PDP_Banner-1_1726737298483.png",
    },
    {
        name: "preview_gallery",
        resource_type: "image",
        resource_value: "https://cdn.10minuteschool.com/images/catalog/media/PDP_Banner-2_1726736040872.png",
    },
    {
        name: "preview_gallery",
        resource_type: "video",
        resource_value: "30y-wlDtIIQ",
        thumbnail_url: "https://cdn.10minuteschool.com/images/catalog/media/introduction_1706097447220.jpg",
    },
    {
        name: "preview_gallery",
        resource_type: "video",
        resource_value: "QBz8FX4GE_w",
        thumbnail_url: "https://cdn.10minuteschool.com/images/catalog/media/QBz8FX4GE_w-HD_1718880944063.jpg",
    },
    {
        name: "book_preview",
        resource_type: "video",
        resource_value: "BbtkvRnraok",
        thumbnail_url: "https://cdn.10minuteschool.com/images/catalog/media/BbtkvRnraok-HD_1718880976960.jpg",
    },
    {
        name: "preview_gallery",
        resource_type: "video",
        resource_value: "AvB2ibYd1z4",
        thumbnail_url: "https://cdn.10minuteschool.com/images/catalog/media/AvB2ibYd1z4-HD_1707647843136.jpg",
    },
];


const Trailer = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const currentItem = media[currentIndex];

    const goPrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
    };

    const goNext = () => {
        setCurrentIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="max-w-xl mx-auto p-1.5">
            {/* Preview */}
            <div className="relative aspect-video bg-black overflow-hidden">
                {currentItem.resource_type === "image" ? (
                    <img src={currentItem.resource_value} alt="Preview" className="object-cover"/>
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
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow"
                >
                    <FaChevronLeft/>
                </button>
                <button
                    onClick={goNext}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow"
                >
                    <FaChevronRight/>
                </button>
            </div>

            {/* Thumbnails */}
            <div className="flex mt-4 space-x-2 overflow-x-auto scrollbar-hide">
                {media.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-[58px] h-[33px] flex-shrink-0 border-2 rounded overflow-hidden cursor-pointer ${
                            index === currentIndex ? "border-green-500" : "border-transparent"
                        }`}
                    >
                        {item.resource_type === "image" ? (
                            <img src={item.resource_value} alt={`Thumb ${index}`}
                                 className="w-full h-full object-cover"/>
                        ) : (
                            <div className="relative w-full h-full">
                                <img
                                    src={item.thumbnail_url}
                                    alt={`Video Thumb ${index}`}
                                    className="w-full h-full object-cover"
                                />
                                <IoMdPlay
                                    className="absolute inset-0 m-auto text-white text-xl bg-black/50 rounded-full p-1"/>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Trailer;