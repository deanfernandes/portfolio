import { type ReactNode, useState, useEffect } from "react";
import type { Theme } from "./types";
import ThemeContext from "./ThemeContext";

type ThemeContextProviderProps = {
    children: ReactNode;
};

function ThemeContextProvider({children}: ThemeContextProviderProps) {
    const [theme, setTheme] = useState<Theme>(() => {
        return (localStorage.getItem('theme') as Theme) || 'light';
    });

    useEffect(() => {
        window.localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    function toggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;