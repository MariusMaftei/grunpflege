import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../i18n";
import { useTranslation } from "react-i18next";
import styles from "./home.module.css";

import BeforeAfterSlider from "../components/UI/BeforeAfterSlider/BeforeAfterSlider";
import ServicesSection from "../components/sections/ServiceSection/ServiceSection";

import RoundaboutBeforeImage from "../assets/images/gallery/before-after/roundabout-before.webp";
import RoundaboutAfterImage from "../assets/images/gallery/before-after/roundabout-after.webp";
import GardenBeforeImage from "../assets/images/gallery/before-after/garden-before.webp";
import GardenAfterImage from "../assets/images/gallery/before-after/garden-after.webp";
import GrassBeforeImage from "../assets/images/gallery/before-after/grass-before.webp";
import GrassAfterImage from "../assets/images/gallery/before-after/grass-after.webp";
import { getHomePageCarouselConfig } from "../data/gallery-data";
import CarouselContainer from "../components/UI/InfiniteCarousel/carousel-container";

export default function HomePage() {
  const { t } = useTranslation("home");

  // Get carousel configuration for home page
  const carouselRowsData = getHomePageCarouselConfig();

  // This ensures that the translations are loaded
  useEffect(() => {
    // This is just to trigger a re-render when the language changes
  }, [t]);

  // iOS Safari parallax fix
  useEffect(() => {
    // Detect iOS
    const isIOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    if (isIOS) {
      // Get the elements with parallax backgrounds
      const heroSection = document.querySelector(`.${styles.heroSection}`);
      const showcaseSection = document.querySelector(
        `.${styles.gardenShowcaseSection}`
      );

      // Apply iOS-specific styles
      if (heroSection) {
        heroSection.style.backgroundAttachment = "scroll";
        // Optionally increase quality for iOS
        heroSection.style.backgroundSize = "cover";
      }

      if (showcaseSection) {
        showcaseSection.style.backgroundAttachment = "scroll";
        // Optionally increase quality for iOS
        showcaseSection.style.backgroundSize = "cover";
      }
    }
  }, []);

  return (
    <div className={styles.pageContainer}>
      <main className={styles.main}>
        {/* Hero Section with Real Image */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>{t("hero.title")}</h1>
            <p className={styles.heroSubtitle}>{t("hero.subtitle")}</p>
            <Link to="/contact" className={styles.ctaButton}>
              {t("hero.cta")}
            </Link>
          </div>
        </section>

        {/* Transformation Showcase with Real Images */}
        <section className={styles.transformationSection}>
          <div className={styles.sectionContainer}>
            <div className="text-center">
              <h2 className={styles.sectionTitle}>
                {t("transformation.title")}
              </h2>
              <p className={styles.sectionDescription}>
                {t("transformation.description")}
              </p>
            </div>

            <div className={styles.slidersGrid}>
              {/* Slider 1: Roundabout Project */}
              <div>
                <h3 className={styles.sliderTitle}>
                  {t("transformation.sliders.roundabout.title")}
                </h3>
                <div className={styles.sliderContainer}>
                  <BeforeAfterSlider
                    beforeImage={RoundaboutBeforeImage}
                    afterImage={RoundaboutAfterImage}
                    beforeLabel={t("transformation.sliders.roundabout.before")}
                    afterLabel={t("transformation.sliders.roundabout.after")}
                  />
                </div>
              </div>

              {/* Slider 2: Lawn Maintenance */}
              <div>
                <h3 className={styles.sliderTitle}>
                  {t("transformation.sliders.lawn.title")}
                </h3>
                <div className={styles.sliderContainer}>
                  <BeforeAfterSlider
                    beforeImage={GrassBeforeImage}
                    afterImage={GrassAfterImage}
                    beforeLabel={t("transformation.sliders.lawn.before")}
                    afterLabel={t("transformation.sliders.lawn.after")}
                  />
                </div>
              </div>

              {/* Slider 3: Garden Renovation */}
              <div>
                <h3 className={styles.sliderTitle}>
                  {t("transformation.sliders.garden.title")}
                </h3>
                <div className={styles.sliderContainer}>
                  <BeforeAfterSlider
                    beforeImage={GardenBeforeImage}
                    afterImage={GardenAfterImage}
                    beforeLabel={t("transformation.sliders.garden.before")}
                    afterLabel={t("transformation.sliders.garden.after")}
                  />
                </div>
              </div>
            </div>

            <p className={styles.transformationCaption}>
              {t("transformation.caption")}
            </p>
          </div>
        </section>

        {/* Project Gallery Carousel */}
        <section id="gallery" className={styles.gallerySection}>
          <div className={styles.sectionContainer}>
            <div className="text-center">
              <h2 className={styles.sectionTitle}>{t("gallery.title")}</h2>
              <p className={styles.sectionDescription}>
                {t("gallery.description")}
              </p>
            </div>
            <CarouselContainer rowsData={carouselRowsData} />
          </div>
        </section>

        {/* Garden Showcase Section */}
        <section className={styles.gardenShowcaseSection}>
          <div className={styles.showcaseContent}>
            <h2 className={styles.showcaseTitle}>{t("showcase.title")}</h2>
            <Link to="/gallery" className={styles.ctaButton}>
              {t("showcase.cta")}
            </Link>
          </div>
        </section>

        {/* Services Section */}
        <ServicesSection />

        {/* Testimonials Section */}
        <section className={styles.testimonialsSection}>
          <div className={styles.sectionContainer}>
            <div className="text-center">
              <h2 className={styles.sectionTitle}>{t("testimonials.title")}</h2>
              <p className={styles.sectionDescription}>
                {t("testimonials.description")}
              </p>
            </div>
            <div className={styles.testimonialGrid}>
              {t("testimonials.items", { returnObjects: true }).map(
                (testimonial, index) => (
                  <div key={index} className={styles.testimonialCard}>
                    <p className={styles.testimonialText}>{testimonial.text}</p>
                    <p className={styles.testimonialAuthor}>
                      {testimonial.author}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
