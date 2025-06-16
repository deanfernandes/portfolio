import './Sidebar.css'
import useLanguage from "../../hooks/useLanguage";

function Sidebar() {
    const {t} = useLanguage();

    return (
        <aside>
            <nav>
                <a href="#education">
                    <span className='emoji'>🎓</span>
                    <span className='label'>{t('education')}</span>
                </a>
                <a href="#experience">
                    <span className='emoji'>💼</span>
                    <span className='label'>{t('experience')}</span>
                </a>
                <a href="#skills">
                    <span className='emoji'>🛠️</span>
                    <span className='label'>{t('skills')}</span>
                </a>
                <a href="#projects">
                    <span className='emoji'>💻</span>
                    <span className='label'>{t('projects')}</span>
                </a>
            </nav>
        </aside>
    );
}

export default Sidebar;