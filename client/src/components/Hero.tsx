import parse from "html-react-parser";
import {HeaderValue} from "@/types/type";

type Props = {
    value: HeaderValue;
}


const Hero = ({value}: Props) => {
    return (
        <div className="container px-4 md:px-0">
            <div className="space-y-4 md:space-y-5">
                <h1 className="text-xl md:text-3xl font-semibold leading-snug md:leading-[40px]">
                    {value?.title}
                </h1>
                <div className="w-full md:w-1/2 text-sm md:text-base font-normal leading-[24px] text-[#a3a3a3]">
                    {parse(value?.description)}
                </div>
            </div>
        </div>
    );
};

export default Hero;