import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import styles from "./InfiniteCarousel.module.css";

// Single row carousel component that accepts props
export default function InfiniteCarousel({
  images,
  duration = 40,
  reverse = false,
  rowId = "row",
}) {
  const { t } = useTranslation("gallery");
  const rowRef = useRef(null);

  // Pause animation on hover
  useEffect(() => {
    const handleMouseEnter = (element) => {
      if (element) {
        element.style.animationPlayState = "paused";
      }
    };

    const handleMouseLeave = (element) => {
      if (element) {
        element.style.animationPlayState = "running";
      }
    };

    const rowElement = rowRef.current;

    if (rowElement) {
      rowElement.addEventListener("mouseenter", () =>
        handleMouseEnter(rowElement)
      );
      rowElement.addEventListener("mouseleave", () =>
        handleMouseLeave(rowElement)
      );
    }

    return () => {
      if (rowElement) {
        rowElement.removeEventListener("mouseenter", () =>
          handleMouseEnter(rowElement)
        );
        rowElement.removeEventListener("mouseleave", () =>
          handleMouseLeave(rowElement)
        );
      }
    };
  }, []);

  // Duplicate images to create the infinite effect
  const duplicateImages = (images) => {
    return [...images, ...images];
  };

  return (
    <div className={styles.carouselRow} ref={rowRef}>
      <div
        className={styles.carouselTrack}
        style={{
          animationDuration: `${duration}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {duplicateImages(images).map((image, index) => (
          <div
            key={`${rowId}-${index}`}
            className={`${styles.carouselItem} ${styles[image.format]}`}
            style={{ width: `${image.width}px`, flexShrink: 0 }}
          >
            <img
              src={image.src || "/placeholder.svg"}
              alt={t(image.alt)}
              className={styles.carouselImage}
              width={image.width}
              height={280}
            />
            <div className={styles.imageCaption}>{t(image.description)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
