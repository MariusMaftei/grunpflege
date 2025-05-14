import InfiniteCarousel from "./InfiniteCarousel";
import styles from "./InfiniteCarousel.module.css";

export default function CarouselContainer({ rowsData }) {
  return (
    <div className={styles.carouselContainer}>
      {rowsData.map((row, index) => (
        <InfiniteCarousel
          key={`carousel-row-${index}`}
          images={row.images}
          duration={row.duration}
          reverse={row.reverse}
          rowId={`row-${index}`}
        />
      ))}
    </div>
  );
}
