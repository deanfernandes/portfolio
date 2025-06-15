import './Footer.css'
import useLanguage from '../hooks/useLanguage';
import { type FC } from 'react';

type FooterProps = {
    name: string;
}

const Footer: FC<FooterProps> = ({name})=> {
    const {t} = useLanguage();

    return <footer><p>&copy; 2025 {name}. {t('copyrightMessage')}</p></footer>
}

export default Footer;