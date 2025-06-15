import LanguageContext from "./LanguageContext";
import {type ReactNode, useState, useEffect } from "react";
import { type Language } from "./types";

const translations: Record<string, Record<string, string>> = {
    en: {
        "copyrightMessage": "All rights reserved.",
        "education": "Education",
        "work-experience": "Work Experience",
        "skills": "Skills",
        "projects": "Projects",
        "go-to-top": "Go to top",
        "load-more-btn": "Load more...",
        "load-more-btn-tooltip": "Load more projects",
    },
    pt: {
        "copyrightMessage": "Todos os direitos reservados",
        "education": "Educação",
        "work-experience": "Experiência Profissional",
        "skills": "Habilidades",
        "projects": "Projetos",
        "go-to-top": "Ir para o topo",
        "load-more-btn": "Carregar mais...",
        "load-more-btn-tooltip": "Carregar mais projetos",
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