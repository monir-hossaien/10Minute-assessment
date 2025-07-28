'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

type Lang = 'en' | 'bn';

interface LocaleContextType {
    lang: Lang;
    toggleLang: () => void;
}

const LocaleContext = createContext<LocaleContextType | null>(null);

export const useLocale = () => useContext(LocaleContext)!;

export const LocaleProvider = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const router = useRouter();
    const [lang, setLang] = useState<Lang>('bn');

    useEffect(() => {
        const match = pathname.match(/^\/(en|bn)/);
        setLang(match ? (match[1] as Lang) : 'bn');
    }, [pathname]);

    const toggleLang = () => {
        const newLang: Lang = lang === 'en' ? 'bn' : 'en';

        const newPath = pathname.replace(/^\/(en|bn)/, `/${newLang}`);
        const updatedPath = pathname.startsWith('/en') || pathname.startsWith('/bn')
            ? newPath
            : `/${newLang}${pathname}`;

        router.push(updatedPath);
        setLang(newLang);
    };

    return (
        <LocaleContext.Provider value={{ lang, toggleLang }}>
            {children}
        </LocaleContext.Provider>
    );
};
