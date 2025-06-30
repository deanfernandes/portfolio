import LanguageContext from "./LanguageContext";
import {type ReactNode, useState, useEffect } from "react";
import { type Language } from "./types";

//TODO: json files + sections e.g. sidebar
const translations: Record<string, Record<string, string>> = {
    en: {
        "copyrightMessage": "All rights reserved.",
        "education": "Education",
        "experience": "Experience",
        "skills": "Skills",
        "projects": "Projects",
        "go-to-top": "Go to top",
        "load-more-btn": "Load more...",
        "load-more-btn-tooltip": "Load more projects",
        "contact-header": "Contact form",
        "contact-name": "Name",
        "contact-email": "Email address",
        "contact-msg": "Message",
        "contact-send": "Send",
        "contact-sending": "Sending",
        "email-sent-msg": "Email sent",
        "contact": "Contact",
    },
    pt: {
        "copyrightMessage": "Todos os direitos reservados",
        "education": "Educação",
        "experience": "Experiência",
        "skills": "Habilidades",
        "projects": "Projetos",
        "go-to-top": "Ir para o topo",
        "load-more-btn": "Carregar mais...",
        "load-more-btn-tooltip": "Carregar mais projetos",
        "contact-header": "Formulário de contato",
        "contact-name": "Nome",
        "contact-email": "Endereço de e-mail",
        "contact-msg": "Mensagem",
        "contact-send": "Enviar",
        "contact-sending": "Enviando",
        "email-sent-msg": "E-mail enviado",
        "contact": "Contato",
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
        document.documentElement.lang = language;
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