import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // Suas traduções em inglês aqui
        }
      },
      pt: {
        translation: {
          // Suas traduções em português aqui
        }
      }
    },
    lng: "pt", // Idioma padrão
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // react já escapa por padrão
    }
  });

export default i18n;
