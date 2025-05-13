import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styles from "./gallery.module.css";

import "../../i18n";
import { getImagesByCategory } from "../../data/gallery-data";

export default function GalleryPage() {
  const { t } = useTranslation("gallery");

  // Categories for filtering
  const categories = [
    { id: "all", name: t("filter.categories.all") },
    { id: "gardens", name: t("filter.categories.gardens") },
    { id: "lawns", name: t("filter.categories.lawns") },
    { id: "trees", name: t("filter.categories.trees") },
  ];

  // State for selected category
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Get filtered images based on selected category
  const [filteredImages, setFilteredImages] = useState([]);

  // Update filtered images when category changes or translations load
  useEffect(() => {
    setFilteredImages(getImagesByCategory(selectedCategory));
  }, [selectedCategory, t]);

  // Handle category change
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className={styles.pageContainer}>
      <main className={styles.main}>
        <section className={styles.gallerySection}>
          <div className={styles.galleryContainer}>
            <h1 className={styles.galleryTitle}>{t("title")}</h1>
            <p className={styles.galleryDescription}>{t("description")}</p>

            {/* Filter Dropdown */}
            <div className={styles.filterContainer}>
              <label htmlFor="category-filter" className={styles.filterLabel}>
                {t("filter.label")}
              </label>
              <select
                id="category-filter"
                className={styles.filterSelect}
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Gallery Grid */}
            <div className={styles.galleryGrid}>
              {filteredImages.map((image, index) => (
                <div key={index} className={styles.galleryItem}>
                  <div className={styles.imageContainer}>
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={t(image.alt)}
                      loading="lazy"
                      className={styles.galleryImage}
                    />
                    <div className={styles.imageOverlay}>
                      <div className={styles.imageDescription}>
                        {t(image.description)}
                      </div>
                      <div className={styles.categoryTag}>
                        {
                          categories.find((cat) => cat.id === image.category)
                            ?.name
                        }
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty state if no images match the filter */}
            {filteredImages.length === 0 && (
              <div className={styles.emptyState}>
                <p>{t("emptyState")}</p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
