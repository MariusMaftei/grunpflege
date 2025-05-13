import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { getCarouselRowImages } from "../../../data/gallery-data";
import styles from "./InfiniteCarousel.module.css";

export default function InfiniteCarousel() {
  const { t } = useTranslation("gallery");

  // References to track animation pausing on hover
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const row3Ref = useRef(null);

  // Get images for each row from our data store
  const row1Images = getCarouselRowImages("gardens");
  const row2Images = getCarouselRowImages("lawns");
  const row3Images = getCarouselRowImages("trees");

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

    const row1Element = row1Ref.current;
    const row2Element = row2Ref.current;
    const row3Element = row3Ref.current;

    if (row1Element) {
      row1Element.addEventListener("mouseenter", () =>
        handleMouseEnter(row1Element)
      );
      row1Element.addEventListener("mouseleave", () =>
        handleMouseLeave(row1Element)
      );
    }

    if (row2Element) {
      row2Element.addEventListener("mouseenter", () =>
        handleMouseEnter(row2Element)
      );
      row2Element.addEventListener("mouseleave", () =>
        handleMouseLeave(row2Element)
      );
    }

    if (row3Element) {
      row3Element.addEventListener("mouseenter", () =>
        handleMouseEnter(row3Element)
      );
      row3Element.addEventListener("mouseleave", () =>
        handleMouseLeave(row3Element)
      );
    }

    return () => {
      if (row1Element) {
        row1Element.removeEventListener("mouseenter", () =>
          handleMouseEnter(row1Element)
        );
        row1Element.removeEventListener("mouseleave", () =>
          handleMouseLeave(row1Element)
        );
      }

      if (row2Element) {
        row2Element.removeEventListener("mouseenter", () =>
          handleMouseEnter(row2Element)
        );
        row2Element.removeEventListener("mouseleave", () =>
          handleMouseLeave(row2Element)
        );
      }

      if (row3Element) {
        row3Element.removeEventListener("mouseenter", () =>
          handleMouseEnter(row3Element)
        );
        row3Element.removeEventListener("mouseleave", () =>
          handleMouseLeave(row3Element)
        );
      }
    };
  }, []);

  // Duplicate images to create the infinite effect
  const duplicateImages = (images) => {
    return [...images, ...images];
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselRow} ref={row1Ref}>
        <div
          className={styles.carouselTrack}
          style={{ animationDuration: "35s" }}
        >
          {duplicateImages(row1Images).map((image, index) => (
            <div
              key={`row1-${index}`}
              className={`${styles.carouselItem} ${styles[image.format]}`}
              style={{ width: `${image.width}px`, flexShrink: 0 }}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={t(image.alt)}
                loading="lazy"
                className={styles.carouselImage}
              />
              <div className={styles.imageCaption}>{t(image.description)}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.carouselRow} ref={row2Ref}>
        <div
          className={styles.carouselTrack}
          style={{ animationDuration: "45s", animationDirection: "reverse" }}
        >
          {duplicateImages(row2Images).map((image, index) => (
            <div
              key={`row2-${index}`}
              className={`${styles.carouselItem} ${styles[image.format]}`}
              style={{ width: `${image.width}px`, flexShrink: 0 }}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={t(image.alt)}
                loading="lazy"
                className={styles.carouselImage}
              />
              <div className={styles.imageCaption}>{t(image.description)}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.carouselRow} ref={row3Ref}>
        <div
          className={styles.carouselTrack}
          style={{ animationDuration: "40s" }}
        >
          {duplicateImages(row3Images).map((image, index) => (
            <div
              key={`row3-${index}`}
              className={`${styles.carouselItem} ${styles[image.format]}`}
              style={{ width: `${image.width}px`, flexShrink: 0 }}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={t(image.alt)}
                loading="lazy"
                className={styles.carouselImage}
              />
              <div className={styles.imageCaption}>{t(image.description)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
