"use client";
import dynamic from "next/dynamic";

import { TbCurrencyTaka } from "react-icons/tb";

import Button from "@/components/Button";
import CheckLists from "@/components/CheckLists";
import {Suspense} from "react";
const Trailer = dynamic(()=> import("@/components/Trailer"), {ssr: false});


const RightSideContent = ({ data }: any) => {

    return (
        <div className="w-full md:w-4/12 md:absolute top-30 right-9 z-0">
            <div className="bg-white md:border border-gray-300 h-fit">
                {/* Desktop Trailer */}
                <div>
                    <Suspense fallback="loading...">
                        <Trailer values={data?.media} />
                    </Suspense>
                </div>

                {/* Sticky Pricing Box */}
                <div className="md:px-4 py-6 space-y-4 bg-white sticky top-20">
                    <h1 className="font-bold text-2xl flex items-center text-[#111827]">
                        <TbCurrencyTaka />
                        <span>1000</span>
                    </h1>
                    <Button name={data?.cta_text?.name || "Enroll Now"} />
                    <CheckLists values={data?.checklist} />
                </div>
            </div>
        </div>
    );
};

export default RightSideContent;
