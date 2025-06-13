import useLanguage from '../hooks/useLanguage';

function LanguageButton() {
    const {language, toggleLanguage} = useLanguage();
    return <button title={language} onClick={toggleLanguage} className="language-btn">{language === 'en' ? '🇬🇧' : '🇵🇹'}</button>
}

export default LanguageButton;