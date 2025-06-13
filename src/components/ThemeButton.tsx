import useTheme from "../hooks/useTheme";

function ThemeButton() {
    const {theme, toggleTheme} = useTheme();
    return <button title={theme} onClick={toggleTheme} className="theme-btn">{theme === 'light' ? '☀️' : '🌙'}</button>
}

export default ThemeButton;