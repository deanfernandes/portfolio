import './Footer.css'
import useLanguage from '../hooks/useLanguage';

function Footer({name}) {
    const {t} = useLanguage();

    return <footer><p>&copy; 2025 {name}. {t('copyrightMessage')}</p></footer>
}

export default Footer;