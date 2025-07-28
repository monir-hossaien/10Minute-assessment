import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { getCourse } from "@/lib";
import { Section } from "@/types/type";
import {Metadata} from "next";
import RightSideContent from "@/components/RightSideContent";
import Hero from "@/components/Hero";

// Dynamically import components with SSR support
const MasterLayout = dynamic(() => import("@/layout/MasterLayout"));
const Instructor = dynamic(() => import("@/components/Instructor"));
const CourseLaidOut = dynamic(() => import("@/components/CourseLaidOut"));
const LearnByCourse = dynamic(() => import("@/components/LearnByCourse"));
const CourseDetails = dynamic(() => import("@/components/CourseDetails"));
const ExclusiveFeatures = dynamic(() => import("@/components/ExclusiveFeatures"));



// Dynamic Metadata for SEO
export async function generateMetadata({
                                           params,
                                       }: {
    params: Promise<{ slug: string; lang: string }>;
}): Promise<Metadata> {
    try {

        const { slug, lang } = await params;
        const data = await getCourse(slug, lang);

        const title = data.seo?.metaTitle || data.title || "Course Title";
        const description = data.seo?.metaDescription || data.description || "Course description not available.";
        const image = data.seo?.image || data.media?.thumbnail || "/default-og.png";
        const url = `https://10-minute-assessment.vercel.app/${lang}/product/${slug}`;

        return {
            title,
            description,
            openGraph: {
                title,
                description,
                url,
                images: [
                    {
                        url: image,
                        width: 1200,
                        height: 630,
                        alt: title,
                    },
                ],
                type: "website",
                locale: lang,
            },
            twitter: {
                card: "summary_large_image",
                title,
                description,
                images: [image],
            },
        };
    } catch (error) {
        console.error("Error generating metadata:", error);
        return {
            title: "Course Not Found",
            description: "The course you're looking for does not exist.",
        };
    }
}




export default async function Page({
                                       params,
                                   }: {
    params: Promise<{ slug: string; lang: string }>;
}) {
    const { slug, lang } = await params;

    let data;
    try {
        data = await getCourse(slug, lang);
    } catch (error) {
        notFound();
    }

    if (!data) {
        notFound();
    }

    const headerValue = {
        title: data.title,
        description: data.description,
    };

    const instructor = data.sections.find((s: Section) => s.type === "instructors");
    const features = data.sections.find((s: Section) => s.type === "features");
    const coursePointer = data.sections.find((s: Section) => s.type === "pointers");
    const courseDetails = data.sections.find((s: Section) => s.type === "about");
    const exclusiveFeatures = data.sections.find((s: Section) => s.type === "feature_explanations");

    return (
        <MasterLayout>
            {/* Hero section */}
            <div className="bg-black text-white py-12 md:py-20 overflow-hidden max-h-screen relative">
                <Hero value={headerValue} />
            </div>

            {/* Main Content */}
            <div className="container px-4 md:px-0 my-10">
                <div className="flex flex-col-reverse md:flex-row gap-16">
                    {/* Left Content */}
                    <div className="w-full md:w-7/12 space-y-8">
                        <Instructor value={instructor} />
                        <CourseLaidOut value={features} />
                        <LearnByCourse value={coursePointer} />
                        <CourseDetails value={courseDetails} />
                        <ExclusiveFeatures value={exclusiveFeatures} />
                    </div>

                    {/* Right Content */}
                    <RightSideContent data={data} />
                </div>
            </div>
        </MasterLayout>
    );
}
