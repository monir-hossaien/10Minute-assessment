import MasterLayout from "@/layout/MasterLayout";
import Instructor from "@/components/Instructor";
import CourseLaidOut from "@/components/CourseLaidOut";
import LearnByCourse from "@/components/LearnByCourse";
import CourseDetails from "@/components/CourseDetails";
import ExclusiveFeatures from "@/components/ExclusiveFeatures";
import Trailer from "@/components/Trailer";
import { TbCurrencyTaka } from "react-icons/tb";
import Button from "@/components/Button";
import CheckLists from "@/components/CheckLists";
import {getCourse} from "@/lib";
import parse from "html-react-parser"
import {Section} from "@/types/type";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {

    const { slug } = await params;

    const data = await getCourse(slug);

    const instructor = data.sections.find((s: Section) => s.type === "instructors");
    const features = data.sections.find((s: Section) => s.type === "features");
    const coursePointer = data.sections.find((s: Section) => s.type === "pointers");
    const courseDetails = data.sections.find((s: Section) => s.type === "about");
    const exclusiveFeatures = data.sections.find((s: Section) => s.type === "feature_explanations");


    return (
        <MasterLayout>
            {/* Top Banner Section */}
            <div className="bg-black text-white py-12 md:py-20 overflow-hidden">
                <div className="container px-4 md:px-0">
                    <div className="md:w-1/2 space-y-4 md:space-y-5">
                        <h1 className="text-2xl md:text-4xl font-semibold leading-snug md:leading-[40px]">
                            {data?.title}
                        </h1>
                        <div className="text-sm md:text-base font-normal leading-[24px] text-[#a3a3a3]">
                            {parse(data?.description)}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Grid Content */}
            <div className="container px-4 md:px-0 my-10">
                <div className="flex flex-col-reverse md:flex-row gap-16">
                    {/* Left Content */}
                    <div className="w-full md:w-7/12 space-y-8">
                        <Instructor value = {instructor} />
                        <CourseLaidOut value= {features} />
                        <LearnByCourse value= {coursePointer} />
                        <CourseDetails value= {courseDetails} />
                        <ExclusiveFeatures value= {exclusiveFeatures} />
                    </div>

                    {/* Right Content */}
                    <div className="w-full md:w-5/12 bg-white border border-gray-300 h-fit">
                        <Trailer />
                        <div className="px-4 py-6 space-y-4 sticky top-28 self-start">
                            <h1 className="font-bold text-2xl flex items-center text-[#111827]">
                                <TbCurrencyTaka />
                                <span>1000</span>
                            </h1>
                            <Button name={data?.cta_text?.name} />
                            <CheckLists values={data?.checklist} />
                        </div>
                    </div>
                </div>
            </div>
        </MasterLayout>

    );
}
