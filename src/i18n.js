import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next.use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        supportedLngs: ['ar', 'en', 'fr'], 
        fallbackLng: 'ar',
        // lng: 'ar', 
        // debug: false,
        detection: {
            order: ['cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
            caches: ['cookie', 'localStorage'],
        },
        lng: localStorage.getItem('i18nextLng') || 'ar',
        
        backend: {
            loadPath: '/locales/{{lng}}/translation.json',
        },
    });

export default i18next;
