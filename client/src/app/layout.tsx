import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {LocaleProvider} from "@/context/LocaleContext";

const inter = Inter({
    subsets: ["latin"],
});


export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
    title: "IELTS Course by Munzereen Shahid",
    description: "IELTS-এর সেরা প্রস্তুতি নিতে আজই জয়েন করুন Complete IELTS Course-টিতে, যেখানে থাকছে দেশসেরা IELTS ইন্সট্রাক্টরের গাইডলাইন, Mock Test ও প্রিমিয়াম হার্ডকপি বই।",
};


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${inter.className} antialiased overflow-x-hidden`}
        >
        <LocaleProvider>
            {children}
        </LocaleProvider>
        </body>
        </html>
    );
}
