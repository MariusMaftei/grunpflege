import { useTranslation } from "react-i18next";
import styles from "./ServiceSection.module.css";

export default function ServicesSection() {
  const { t } = useTranslation("home");

  const services = [
    {
      title: t("services.items.lawnCare.title"),
      description: t("services.items.lawnCare.description"),
      icon: "🌱",
    },
    {
      title: t("services.items.gardenDesign.title"),
      description: t("services.items.gardenDesign.description"),
      icon: "🏡",
    },
    {
      title: t("services.items.planting.title"),
      description: t("services.items.planting.description"),
      icon: "🌳",
    },
    {
      title: t("services.items.irrigation.title"),
      description: t("services.items.irrigation.description"),
      icon: "💧",
    },
    {
      title: t("services.items.landscaping.title"),
      description: t("services.items.landscaping.description"),
      icon: "🪨",
    },
    {
      title: t("services.items.seasonalCleaning.title"),
      description: t("services.items.seasonalCleaning.description"),
      icon: "🍂",
    },
  ];

  return (
    <section className={styles.servicesSection}>
      <div className={styles.sectionContainer}>
        <h2 className={styles.sectionTitle}>{t("services.title")}</h2>
        <p className={styles.sectionDescription}>{t("services.description")}</p>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.serviceCardTop}></div>
              <div className={styles.serviceCardContent}>
                <div className={styles.serviceIconContainer}>
                  <span className={styles.serviceIcon}>{service.icon}</span>
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
