import { useContext } from 'react';
import ThemeContext from '../context/theme/ThemeContext';

function useTheme() {
    const context = useContext(ThemeContext);
    if(!context) {
        throw new Error('useTheme must be used within a ThemeContextProvider');
    }
    return context;
}

export default useTheme;