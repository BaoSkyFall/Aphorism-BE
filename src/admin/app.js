import MenuLogo from './extensions/logo.png';
import favicon from './extensions/favicon.ico';
const config = {
  auth: {
    logo: MenuLogo,
  },
  // Replace the favicon
  head: {
    favicon: favicon,
  },
  menu: {
    logo: MenuLogo,
  },
  theme: {
    light: {
      colors: {
        primary100: '#FFC2C2',
        primary200: '#FF7D80',
        primary500: '#ED1E24',
        buttonPrimary500: '#ED1E24',
        primary600: '#E0181E',
        buttonPrimary600: '#E0181E',
        primary700: '#ED1E24',
      }
    }
  },
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
  translations: {
    en: {
      'app.components.LeftMenu.navbrand.title': 'Aphorism',
      'app.components.LeftMenu.navbrand.workplace': 'Aphorism Dashboard',
      'Auth.form.welcome.subtitle': 'Log in to your Aphorism account',
      'Auth.form.welcome.title': 'Aphorism'
    }
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
