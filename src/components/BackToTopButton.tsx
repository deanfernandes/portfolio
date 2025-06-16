import { useState, useEffect } from "react";
import useLanguage from "../hooks/useLanguage";

function BackToTopButton() {
    const {t} = useLanguage();
    const [isVisible, setIsVisible] = useState(false);
    useEffect(()=> {
        function handleOnScroll () {
            setIsVisible(window.scrollY > 250);
        }

        window.addEventListener('scroll', handleOnScroll);

        return () => {window.removeEventListener('scroll', handleOnScroll)};
    }, []);

    function handleOnClick() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (isVisible && <button id="back-to-top-btn" title={t('go-to-top')} onClick={handleOnClick}><i className="fas fa-chevron-up"></i></button>);
}

export default BackToTopButton;