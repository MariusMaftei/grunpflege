import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styles from "./gallery.module.css";

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

  // Gallery images from the infinite carousel
  const galleryImages = [
    // Garden Designs
    {
      src: "https://www.thespruce.com/thmb/Iy6knCn3KS7PPX269rlDeXYGwqI=/3000x0/filters:no_upscale():max_bytes(150000):strip_icc()/perennial-flower-garden-layout-5219484-hero-98d6bf293bf84f2e9aff39481210681c.jpg",
      alt: t("gardenDescriptions.perennialPath"),
      description: t("gardenDescriptions.perennialPath"),
      category: "gardens",
    },
    {
      src: "https://cdn.mos.cms.futurecdn.net/XDYmyY2eSMZxXUtTfNMExR-1200-80.jpg",
      alt: t("gardenDescriptions.japaneseGarden"),
      description: t("gardenDescriptions.japaneseGarden"),
      category: "gardens",
    },
    {
      src: "https://www.genus.gs/cdn/shop/articles/Keukenhof_resized.jpg?v=1551185600",
      alt: t("gardenDescriptions.formalTulip"),
      description: t("gardenDescriptions.formalTulip"),
      category: "gardens",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXxDpgkRir1w5Eg_RQ-nsVeKB1o5RD5_0NAA&s",
      alt: t("gardenDescriptions.stoneBorder"),
      description: t("gardenDescriptions.stoneBorder"),
      category: "gardens",
    },
    {
      src: "https://cdn.luxatic.com/wp-content/uploads/2023/05/Most-Beautiful-Gardens.jpg",
      alt: t("gardenDescriptions.luxuryEstate"),
      description: t("gardenDescriptions.luxuryEstate"),
      category: "gardens",
    },

    // Lawn Care
    {
      src: "https://images.unsplash.com/photo-1558904541-efa843a96f01?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3Jhc3MlMjBnYXJkZW58ZW58MHx8MHx8fDA%3D",
      alt: t("lawnDescriptions.premiumInstallation"),
      description: t("lawnDescriptions.premiumInstallation"),
      category: "lawns",
    },
    {
      src: "https://rukminim2.flixcart.com/image/850/1000/xif0q/plant-seed/x/2/c/10000-lawngrass-10000pp-42-sree-original-imagscdf7ydgvrhh.jpeg?q=90&crop=false",
      alt: t("lawnDescriptions.droughtResistant"),
      description: t("lawnDescriptions.droughtResistant"),
      category: "lawns",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH7BL2CabG35fm4RqGbL57X3avv7fBbXhK6EsttOf00NBnT6TIDl2r9jT0T3ECzzlHHk0&usqp=CAU",
      alt: t("lawnDescriptions.ornamentalGrass"),
      description: t("lawnDescriptions.ornamentalGrass"),
      category: "lawns",
    },
    {
      src: "https://www.britishgardencentres.com/wp-content/uploads/2023/04/Love-your-Lawn-1.jpg",
      alt: t("lawnDescriptions.professionalCare"),
      description: t("lawnDescriptions.professionalCare"),
      category: "lawns",
    },

    // Tree Planting
    {
      src: "https://www.lacostegardencentre.com/files/images/news/how-to-plant-a-tree-1000x667-64c8f7fe946a7_n.jpg",
      alt: t("treeDescriptions.expertPlanting"),
      description: t("treeDescriptions.expertPlanting"),
      category: "trees",
    },
    {
      src: "https://cdn.mos.cms.futurecdn.net/aWc2f96ZYsVBNvoN7dYwaC.jpg",
      alt: t("treeDescriptions.matureTrees"),
      description: t("treeDescriptions.matureTrees"),
      category: "trees",
    },
    {
      src: "https://www.southernstartree.com/images/blog/1624466489blog-0623-21.jpg",
      alt: t("treeDescriptions.ornamentalSelection"),
      description: t("treeDescriptions.ornamentalSelection"),
      category: "trees",
    },
    {
      src: "https://www.nature-and-garden.com/wp-content/uploads/sites/4/2018/05/guide-to-plant-trees.jpg",
      alt: t("treeDescriptions.properTechniques"),
      description: t("treeDescriptions.properTechniques"),
      category: "trees",
    },
    {
      src: "https://www.londonlawnturf.co.uk/wp/topsoil/wp-content/uploads/sites/3/2015/12/oak-tree1.jpg",
      alt: t("treeDescriptions.historicOaks"),
      description: t("treeDescriptions.historicOaks"),
      category: "trees",
    },
  ];

  // This ensures that the translations are loaded
  useEffect(() => {
    // This is just to trigger a re-render when the language changes
  }, [t]);

  // Filter images based on selected category
  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((image) => image.category === selectedCategory);

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
                      alt={image.alt}
                      className={styles.galleryImage}
                    />
                    <div className={styles.imageOverlay}>
                      <div className={styles.imageDescription}>
                        {image.description}
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
