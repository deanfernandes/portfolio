import LanguageContext from "./LanguageContext";
import {type ReactNode, useState, useEffect } from "react";
import { type Language } from "./types";

const translations: Record<string, Record<string, string>> = {
    en: {
        "copyrightMessage": "All rights reserved.",
    },
    pt: {
        "copyrightMessage": "Todos os direitos reservados",
    }
};

type LanguageContextProviderProps = {
    children: ReactNode
};

function LanguageContextProvider({children} : LanguageContextProviderProps) {
    const [language, setLanguage] = useState<Language>(()=> {
        return (window.localStorage.getItem('lang') as Language) || 'en';
    });

    useEffect(()=> {
        window.localStorage.setItem('lang', language);
    }, [language])

    function toggleLanguage() {
        setLanguage(language === 'en' ? 'pt' : 'en');
    }

    function t(key: string): string{
        return translations[language]?.[key] ?? key;
    }

    return (
        <LanguageContext.Provider value={{language, setLanguage, toggleLanguage, t}}>
            {children}
        </LanguageContext.Provider>
    );
}

export default LanguageContextProvider;