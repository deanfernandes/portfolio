import ThemeButton from "./ThemeButton";
import LanguageButton from "./LanguageButton";
import './SettingsBar.css'

function SettingsBar() {
    return <div id="settings-bar"><ThemeButton/><LanguageButton/></div>
}

export default SettingsBar;