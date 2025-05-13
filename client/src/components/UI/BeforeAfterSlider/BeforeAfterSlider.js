import { useState, useRef, useEffect, useCallback } from "react";
import styles from "./BeforeAfterSlider.module.css";

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
}) {
  const [sliderPosition, setSliderPosition] = useState(25);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = useCallback(
    (e) => {
      if (isDragging && containerRef.current) {
        const { left, width } = containerRef.current.getBoundingClientRect();
        let newPosition = ((e.clientX - left) / width) * 100;
        setSliderPosition(Math.max(0, Math.min(100, newPosition)));
      }
    },
    [isDragging]
  );

  const handleTouchMove = useCallback(
    (e) => {
      if (isDragging && containerRef.current) {
        const { left, width } = containerRef.current.getBoundingClientRect();
        let newPosition = ((e.touches[0].clientX - left) / width) * 100;
        setSliderPosition(Math.max(0, Math.min(100, newPosition)));
      }
    },
    [isDragging]
  );

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleTouchMove]);

  return (
    <div ref={containerRef} className={styles.container}>
      {/* Grass Image (Left Side) */}
      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <img
            src={afterImage || "/placeholder.svg"}
            alt={afterLabel}
            className={styles.image}
            style={{
              clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />

          {/* After Label (now on left) */}
          {sliderPosition > 10 && (
            <div className={styles.beforeLabel}>{afterLabel}</div>
          )}
        </div>
      </div>

      {/* Soil Image (Right Side) with Overlay */}
      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <img
            src={beforeImage || "/placeholder.svg"}
            alt={beforeLabel}
            className={styles.image}
            style={{
              clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)`,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />

          {/* Dark overlay for soil image (now on right) */}
          <div
            className={styles.soilOverlay}
            style={{
              clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)`,
            }}
          ></div>

          {/* Before Label (now on right) */}
          {sliderPosition < 90 && (
            <div className={styles.afterLabel}>{beforeLabel}</div>
          )}
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className={styles.sliderLine}
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        <div className={styles.sliderHandle}>
          <div className={styles.sliderHandleBar}></div>
        </div>
      </div>
    </div>
  );
}
