import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import language files
import commonDE from "./locales/de/common.json";
import homeDE from "./locales/de/home.json";
import galleryDE from "./locales/de/gallery.json";
import contactDE from "./locales/de/contact.json";
import commonEN from "./locales/en/common.json";
import homeEN from "./locales/en/home.json";
import galleryEN from "./locales/en/gallery.json";
import contactEN from "./locales/en/contact.json";

// Get stored language from localStorage or use default
const getStoredLanguage = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("language") || "de";
  }
  return "de";
};

// Initialize i18next
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      de: {
        common: commonDE,
        home: homeDE,
        gallery: galleryDE,
        contact: contactDE,
      },
      en: {
        common: commonEN,
        home: homeEN,
        gallery: galleryEN,
        contact: contactEN,
      },
    },
    lng: getStoredLanguage(), // use stored language or default
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    ns: ["common", "home", "gallery", "contact"], // namespaces
    defaultNS: "common",
  });

export default i18n;
