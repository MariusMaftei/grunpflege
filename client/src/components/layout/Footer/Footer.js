import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import styles from "./Footer.module.css";

export default function Footer() {
  const { t } = useTranslation("common");
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerGrid}>
          <div className={styles.footerColumn}>
            <h3 className={styles.footerTitle}>Cristian Bogdan Ciobanu</h3>
            <p className={styles.footerDescription}>
              {t("footer.description")}
            </p>
            <div className={styles.socialLinks}>
              <a
                href="https://www.facebook.com/cristianbogdan.ciobanu"
                className={styles.socialLink}
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="https://www.instagram.com/bubulusca/?hl=en"
                className={styles.socialLink}
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://x.com/Schlossg0ld"
                className={styles.socialLink}
                aria-label="Twitter"
              >
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
            </div>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.footerTitle}>{t("footer.contact")}</h3>
            <ul className={styles.footerList}>
              <li className={styles.footerListItem}>
                <FontAwesomeIcon icon={faPhone} /> {t("footer.phone")}:{" "}
                <a href={`tel:${t("phone")}`}>{t("phone")}</a>
              </li>
              <li className={styles.footerListItem}>
                <FontAwesomeIcon icon={faEnvelope} /> {t("footer.email")}:{" "}
                <a href="mailto:cristian.bogdan_ciobanu@yahoo.com">
                  cristian.bogdan_ciobanu@yahoo.com
                </a>
              </li>
              <li className={styles.footerListItem}>
                <FontAwesomeIcon icon={faLocationDot} /> {t("footer.address")}:
                Eichendorffstraße 7C 63768 Hösbach, Germany
              </li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.footerTitle}>{t("footer.services")}</h3>
            <ul className={styles.footerList}>
              <li className={styles.footerListItem}>
                <Link to="/">
                  <FontAwesomeIcon icon={faAngleRight} /> {t("footer.lawnCare")}
                </Link>
              </li>
              <li className={styles.footerListItem}>
                <Link to="/">
                  <FontAwesomeIcon icon={faAngleRight} />{" "}
                  {t("footer.gardenDesign")}
                </Link>
              </li>
              <li className={styles.footerListItem}>
                <Link to="/">
                  <FontAwesomeIcon icon={faAngleRight} /> {t("footer.planting")}
                </Link>
              </li>
              <li className={styles.footerListItem}>
                <Link to="/">
                  <FontAwesomeIcon icon={faAngleRight} />{" "}
                  {t("footer.irrigation")}
                </Link>
              </li>
              <li className={styles.footerListItem}>
                <Link to="/">
                  <FontAwesomeIcon icon={faAngleRight} />{" "}
                  {t("footer.landscaping")}
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.footerTitle}>{t("footer.openingHours")}</h3>
            <ul className={styles.footerList}>
              <li className={styles.footerListItem}>
                <FontAwesomeIcon icon={faClock} /> {t("footer.monday")}
              </li>
              <li className={styles.footerListItem}>
                <FontAwesomeIcon icon={faClock} /> {t("footer.saturday")}
              </li>
              <li className={styles.footerListItem}>
                <FontAwesomeIcon icon={faClock} /> {t("footer.sunday")}
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            {t("footer.copyright", { year: currentYear })}
          </p>
        </div>
      </div>
    </footer>
  );
}
