import { createContext } from 'react';
import type { Theme } from './types';

export interface ThemeContextType {
    theme: Theme,
    setTheme: (theme: Theme) => void;
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export default ThemeContext;