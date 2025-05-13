import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import LanguageSwitcher from "../../UI/LanguageSwitcher/LanguageSwitcher";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import CBCLogo from "../../../assets/images/logo/CBC-new-logo.png";

import styles from "./Header.module.css";

export default function Header() {
  const { t } = useTranslation("common");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Handle clicks outside the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close menu if click is outside menu and not on the burger button
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    // Add event listener when menu is open
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Clean up event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <Link to="/" className={styles.logoLink}>
            <img
              src={CBCLogo}
              alt="Cristian Ciobanu Logo"
              className={styles.logoImage}
            />
          </Link>
        </div>

        <div className={styles.headerRight}>
          <LanguageSwitcher />

          <a href={`tel:${t("phone")}`} className={styles.phoneNumber}>
            <FontAwesomeIcon icon={faPhone} className={styles.phoneIcon} />
            <span className={styles.phoneText}>{t("phone")}</span>
          </a>

          <button
            className={styles.mobileMenuButton}
            onClick={toggleMenu}
            aria-label="Menü umschalten"
            ref={buttonRef}
          >
            <span className={styles.menuIcon}></span>
          </button>

          <nav
            className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}
            ref={menuRef}
          >
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <Link to="/" className={styles.navLink} onClick={closeMenu}>
                  {t("navigation.home")}
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link
                  to="/gallery"
                  className={styles.navLink}
                  onClick={closeMenu}
                >
                  {t("navigation.gallery")}
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link
                  to="/contact"
                  className={styles.navLink}
                  onClick={closeMenu}
                >
                  {t("navigation.contact")}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
