'use client';

import { useLocale } from '@/context/LocaleContext';
import Link from 'next/link';
import logo from '../../public/images/10mslogo-svg.svg';
import Image from 'next/image';
import { useState } from 'react';
import {RiMenuFoldFill, RiMenuUnfoldFill} from 'react-icons/ri';

export default function Navbar() {
    const { lang, toggleLang } = useLocale();
    const [open, setOpen] = useState(false);

    const handleToggleLang = () => {
        toggleLang();
        setOpen(false);
    };

    return (
        <header className="w-full bg-white shadow z-50 sticky top-0">
            {/* Nav Bar */}
            <nav className="container px-4 md:px-0 h-16 flex items-center md:justify-between">
                {/* Mobile menu toggle */}
                <button onClick={() => setOpen(!open)} className="md:hidden cursor-pointer transition-all duration-300 mr-2 md:mr-0">
                    {
                        !open ? <RiMenuUnfoldFill size={24} /> : <RiMenuFoldFill size={24} />
                    }
                </button>

                {/* Logo */}
                <Link href="/">
                    <Image
                        src={logo}
                        width={100}
                        height={100}
                        alt="logo"
                        className="object-contain"
                    />
                </Link>

                {/* Desktop navigation */}
                <ul className="hidden md:flex items-center gap-8">
                    <Link href="/">Home</Link>
                    <Link href={`/${lang}/product/ielts-course`}>Course</Link>
                </ul>

                {/* Desktop language + login buttons */}
                <div className="flex items-center gap-5 ms-auto md:ms-0">
                    <button
                        onClick={toggleLang}
                        className="flex items-center gap-1 px-4 py-1 border border-gray-300 rounded-md hover:bg-gray-100 cursor-pointer"
                    >
                        <svg width="15" height="14" viewBox="0 0 15 14" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <clipPath id="a">
                                    <rect width="15" height="14" fill="white"/>
                                </clipPath>
                            </defs>
                            <g clipPath="url(#a)" fill="#6B7280">
                                <path
                                    d="M8.413 12.71a.462.462 0 1 1-.856-.35l2.45-5.903a.74.74 0 0 1 1.37 0l2.45 5.904a.462.462 0 1 1-.856.349l-2.237-5.574a.046.046 0 0 0-.084 0zm.254-2.068c0-.208.169-.376.376-.376h3.298a.376.376 0 0 1 0 .752H9.043a.376.376 0 0 1-.376-.376M8.757 1a.342.342 0 1 1 0 .685h-.67v4.857a.46.46 0 0 1-.46.458.49.49 0 0 1-.419-.251 3.7 3.7 0 0 0-.56-.743 5 5 0 0 0-.888-.742l.242-.637q.366.211.762.579.395.366.607.743l-.019-.27q0-.126-.01-.261V1.685H.634a.342.342 0 0 1 0-.685zM4.015 6.122q-.655 0-1.254-.308-.597-.31-1.128-1.042-.448-.638-.838-1.682a.364.364 0 0 1 .23-.471c.193-.063.4.04.471.23q.29.772.6 1.305.385.638.858.936.473.3 1.08.3.53 0 .85-.165.328-.174.472-.463.145-.3.145-.656 0-.56-.309-.907a.95.95 0 0 0-.752-.347q-.318 0-.482.145-.164.135-.164.415 0 .068.019.183c.019.113-.046.233-.158.255l-.208.04a.34.34 0 0 1-.4-.24l-.015-.065a2 2 0 0 1-.03-.328q0-.357.194-.598.203-.24.51-.357a1.8 1.8 0 0 1 .666-.125q.57 0 .984.26.415.25.647.695a2.2 2.2 0 0 1 .231 1.032q0 .52-.241.974-.24.444-.733.714-.492.27-1.245.27m-.308-3.608a.94.94 0 0 0-.29-.54q-.231-.24-.684-.337l.231-.434.434.115q.55.213.791.483.24.27.28.685z"/>
                            </g>
                        </svg>
                        {lang === 'en' ? 'বাং' : 'EN'}
                    </button>
                    <button className="px-6 py-1 bg-[#1CAB55] text-white rounded-md cursor-pointer">
                        Login
                    </button>
                </div>
            </nav>

            {/* Mobile menu dropdown */}
            {open && (
                <div className="md:hidden bg-white shadow-md px-4 py-4 flex flex-col gap-4">
                    <Link href="/" onClick={() => setOpen(false)}>
                        Home
                    </Link>
                    <Link href={`/${lang}/product/ielts-course`} onClick={() => setOpen(false)}>
                        Course
                    </Link>
                    <div className="hidden md:flex items-center gap-5">
                        <button
                            onClick={handleToggleLang}
                            className="text-left border border-gray-300 rounded px-2 py-1"
                        >
                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <clipPath id="a">
                                        <rect width="15" height="14" fill="white"/>
                                    </clipPath>
                                </defs>
                                <g clipPath="url(#a)" fill="#6B7280">
                                    <path
                                        d="M8.413 12.71a.462.462 0 1 1-.856-.35l2.45-5.903a.74.74 0 0 1 1.37 0l2.45 5.904a.462.462 0 1 1-.856.349l-2.237-5.574a.046.046 0 0 0-.084 0zm.254-2.068c0-.208.169-.376.376-.376h3.298a.376.376 0 0 1 0 .752H9.043a.376.376 0 0 1-.376-.376M8.757 1a.342.342 0 1 1 0 .685h-.67v4.857a.46.46 0 0 1-.46.458.49.49 0 0 1-.419-.251 3.7 3.7 0 0 0-.56-.743 5 5 0 0 0-.888-.742l.242-.637q.366.211.762.579.395.366.607.743l-.019-.27q0-.126-.01-.261V1.685H.634a.342.342 0 0 1 0-.685zM4.015 6.122q-.655 0-1.254-.308-.597-.31-1.128-1.042-.448-.638-.838-1.682a.364.364 0 0 1 .23-.471c.193-.063.4.04.471.23q.29.772.6 1.305.385.638.858.936.473.3 1.08.3.53 0 .85-.165.328-.174.472-.463.145-.3.145-.656 0-.56-.309-.907a.95.95 0 0 0-.752-.347q-.318 0-.482.145-.164.135-.164.415 0 .068.019.183c.019.113-.046.233-.158.255l-.208.04a.34.34 0 0 1-.4-.24l-.015-.065a2 2 0 0 1-.03-.328q0-.357.194-.598.203-.24.51-.357a1.8 1.8 0 0 1 .666-.125q.57 0 .984.26.415.25.647.695a2.2 2.2 0 0 1 .231 1.032q0 .52-.241.974-.24.444-.733.714-.492.27-1.245.27m-.308-3.608a.94.94 0 0 0-.29-.54q-.231-.24-.684-.337l.231-.434.434.115q.55.213.791.483.24.27.28.685z"/>
                                </g>
                            </svg>
                            {lang === 'en' ? 'বাং' : 'EN'}
                        </button>
                        <button className="px-4 py-2 bg-[#1CAB55] text-white rounded-md">Login</button>
                    </div>
                </div>
            )}
        </header>
    );
}
