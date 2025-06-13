import { useContext } from "react";
import LanguageContext from "../context/language/LanguageContext";

function useLanguage() {
    const ctx = useContext(LanguageContext);
    if(!ctx) {
        throw new Error('useTheme must be used within a ThemeContextProvider');
    }
    return ctx;
}

export default useLanguage;