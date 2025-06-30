import React, { useState } from "react";
import useLanguage from "../../hooks/useLanguage"
import emailjs from 'emailjs-com'

type FormData = {
    name: string,
    email: string,
    message: string,
    website: string,
}

function ContactForm() {
    const {t} = useLanguage();
    const [formData, setFormData] = useState<FormData>({name: '', email: '', message: '', website: ''});
    const [honeypot, setHoneypot] = useState<boolean>(false);
    const [isSending, setIsSending] = useState<boolean>(false);

    function handleOnChange(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
        const {name, value} = e.target;
        if(name === "honeypot") {
            setHoneypot(true);
            return;
        }

        setFormData(prev => ({ ...prev, [name]: value }));
    }

    function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if(honeypot) {
            console.warn('Spam bot detected');
            return;
        }

        setIsSending(true);

        const templatePrams: Record<string, unknown> = {
            name: formData.name,
            email: formData.email,
            message: formData.message,
        }

        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            templatePrams,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(() => {
            alert(`${t('email-sent-msg')}!`);
        })
        .catch((error) => {
            console.error('Email sending failed:', error);
        })
        .finally(() => {
            setIsSending(false);
        });

        setFormData(prev => ({name: '', email: '', message: '', website: ''}));
    }

    return (
        <section id="contact">
                <h2>{t('contact-header')}:</h2>
                <div className='contact-container'>
                    <form onSubmit={handleOnSubmit} className="contact-form">
                        <label htmlFor="contact-name">{t('contact-name')}<span className="required">*</span></label>
                        <input type="text" id="contact-name" name="name" value={formData.name} onChange={handleOnChange} required/>

                        <label htmlFor="email">{t('contact-email')}<span className="required">*</span></label>
                        <input type="text" id="email" name="email" value={formData.email} onChange={handleOnChange} required/>

                        <label htmlFor="message">{t('contact-msg')}<span className="required">*</span></label>
                        <textarea name="message" id="message" rows={3} value={formData.message} onChange={handleOnChange} required></textarea>

                        <input type="text" name="website" onChange={handleOnChange} hidden /> {/* honeypot */}

                        <button type="submit" disabled={isSending}>
                            {isSending ? t("contact-sending") : t("contact-send")}
                        </button>
                    </form>
                </div>
        </section>
    )
}

export default ContactForm;