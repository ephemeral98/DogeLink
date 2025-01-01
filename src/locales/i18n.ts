import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

i18next.use(initReactI18next).init({
  resources: {
    en: { translation: { welcome: 'Welcome to the {{ text }} site!' } },
    zh: { translation: { welcome: '欢迎来到网站！' } },
  },
  lng: 'en', // 默认语言
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // React 已经对输出内容进行了转义
  },
});

export default i18next;


