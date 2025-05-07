import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import styles from "./LanguageSwitcher.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  // Set initial language from localStorage on component mount
  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage && storedLanguage !== i18n.language) {
      i18n.changeLanguage(storedLanguage);
    }
  }, [i18n]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    // Store the selected language in localStorage
    localStorage.setItem("language", lng);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.languageSwitcher}>
      <button
        className={styles.languageButton}
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <FontAwesomeIcon icon={faGlobe} className={styles.globeIcon} />
        <span className={styles.languageCode}>
          {i18n.language === "de" ? "DE" : "EN"}
        </span>
      </button>
      {isOpen && (
        <div className={styles.languageDropdown}>
          <button
            className={`${styles.languageOption} ${
              i18n.language === "de" ? styles.active : ""
            }`}
            onClick={() => changeLanguage("de")}
          >
            Deutsch
          </button>
          <button
            className={`${styles.languageOption} ${
              i18n.language === "en" ? styles.active : ""
            }`}
            onClick={() => changeLanguage("en")}
          >
            English
          </button>
        </div>
      )}
    </div>
  );
}
