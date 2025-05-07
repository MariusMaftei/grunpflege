import { useEffect, useRef } from "react";
import styles from "./InfiniteCarousel.module.css";

import FlowerImage1 from "../../../assets/images/flower-image-1.jpg";
import FlowerImage2 from "../../../assets/images/flower-image-2.jpg";
import FlowerImage3 from "../../../assets/images/flower-image-3.jpg";
import FlowerImage4 from "../../../assets/images/flower-image-4.jpg";

import TreeImage1 from "../../../assets/images/tree-image-1.jpg";

export default function InfiniteCarousel() {
  // References to track animation pausing on hover
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const row3Ref = useRef(null);

  // Images for each row with different formats: square, normal, and wide
  const row1Images = [
    {
      src: "https://www.thespruce.com/thmb/Iy6knCn3KS7PPX269rlDeXYGwqI=/3000x0/filters:no_upscale():max_bytes(150000):strip_icc()/perennial-flower-garden-layout-5219484-hero-98d6bf293bf84f2e9aff39481210681c.jpg",
      alt: "Gartenweg mit Hortensien",
      description: "Staudengartenweg-Design",
      format: "wide",
      width: 450,
    },
    {
      src: "https://cdn.mos.cms.futurecdn.net/XDYmyY2eSMZxXUtTfNMExR-1200-80.jpg",
      alt: "Kirschblütenbaum am Teich",
      description: "Japanisch inspirierter Garten mit Kirschblüten",
      format: "square",
      width: 280,
    },
    {
      src: "https://www.genus.gs/cdn/shop/articles/Keukenhof_resized.jpg?v=1551185600",
      alt: "Park mit Tulpenbeeten",
      description: "Formale Tulpengarten-Installation",
      format: "normal",
      width: 350,
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXxDpgkRir1w5Eg_RQ-nsVeKB1o5RD5_0NAA&s",
      alt: "Geschwungene Gartengrenze mit Steinen",
      description: "Natürliche Steingrenze mit heimischen Pflanzen",
      format: "wide",
      width: 450,
    },
    {
      src: "https://cdn.luxatic.com/wp-content/uploads/2023/05/Most-Beautiful-Gardens.jpg",
      alt: "Steingesäumte Blumengrenze",
      description: "Luxuriöses Anwesen-Gartendesign",
      format: "square",
      width: 280,
    },
    {
      src: "https://plantperfect.com/wp-content/uploads/2021/02/plantperfect_planningyourspringgarden_header.png",
      alt: "Park mit Tulpenbeeten",
      description: "Frühlingsblumenzwiebelgarten-Planung",
      format: "normal",
      width: 350,
    },
    {
      src: "https://www.silkplantsdirect.com/cdn/shop/articles/How_to_revamp_your_garden_for_spring_1200x1200.jpg?v=1646044378",
      alt: "Geschwungene Gartengrenze mit Steinen",
      description: "Frühlingsgartenrevitalisierung",
      format: "wide",
      width: 450,
    },
    {
      src: "https://cdn.mos.cms.futurecdn.net/qh9DwnZhoLyKXgT2UnWP9k.jpg",
      alt: "Steingesäumte Blumengrenze",
      description: "Cottage-Garten-Randdesign",
      format: "square",
      width: 280,
    },
    {
      src: "https://ecogardener.com/cdn/shop/articles/Best_Spring_Flowers_For_Your_Garden-min.jpg?v=1645075043",
      alt: "Park mit Tulpenbeeten",
      description: "Umweltfreundlicher Frühlingsblumengarten",
      format: "normal",
      width: 350,
    },
    {
      src: "https://www.explore.com/img/gallery/beautiful-spring-flowers-around-the-world/l-intro-1667488045.jpg",
      alt: "Geschwungene Gartengrenze mit Steinen",
      description: "Farbenfrohe Frühlingsblumen-Installation",
      format: "wide",
      width: 450,
    },
    {
      src: FlowerImage1,
      alt: "Steingesäumte Blumengrenze",
      description: "Cottage-Garten-Randdesign",
      format: "square",
      width: 280,
    },
    {
      src: FlowerImage2,
      alt: "Park mit Tulpenbeeten",
      description: "Umweltfreundlicher Frühlingsblumengarten",
      format: "normal",
      width: 350,
    },
    {
      src: FlowerImage3,
      alt: "Geschwungene Gartengrenze mit Steinen",
      description: "Farbenfrohe Frühlingsblumen-Installation",
      format: "wide",
      width: 450,
    },
    {
      src: FlowerImage4,
      alt: "Steingesäumte Blumengrenze",
      description: "Cottage-Garten-Randdesign",
      format: "square",
      width: 280,
    },
  ];

  const row2Images = [
    {
      src: "https://images.unsplash.com/photo-1558904541-efa843a96f01?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3Jhc3MlMjBnYXJkZW58ZW58MHx8MHx8fDA%3D",
      alt: "Tulpenbeet",
      description: "Premium-Raseninstallation",
      format: "square",
      width: 280,
    },
    {
      src: "https://rukminim2.flixcart.com/image/850/1000/xif0q/plant-seed/x/2/c/10000-lawngrass-10000pp-42-sree-original-imagscdf7ydgvrhh.jpeg?q=90&crop=false",
      alt: "Ausgewachsener Baum mit farbenfroher Landschaftsgestaltung",
      description: "Trockenheitsresistente Rasenlösungen",
      format: "wide",
      width: 450,
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH7BL2CabG35fm4RqGbL57X3avv7fBbXhK6EsttOf00NBnT6TIDl2r9jT0T3ECzzlHHk0&usqp=CAU",
      alt: "Gepflegter Garten mit Bäumen",
      description: "Ziergras-Gartendesign",
      format: "normal",
      width: 350,
    },
    {
      src: "https://www.britishgardencentres.com/wp-content/uploads/2023/04/Love-your-Lawn-1.jpg",
      alt: "Farbenfroher Blumengarten",
      description: "Professionelle Rasenpflegedienste",
      format: "square",
      width: 280,
    },
    {
      src: "https://thelandscapefixers.co.uk/wp-content/uploads/2021/07/20200731_135253_resized.jpg",
      alt: "Formaler Garten mit Brunnen",
      description: "Komplette Rasenerneuerung",
      format: "wide",
      width: 450,
    },
    {
      src: "https://thegardenmen.com.au/wp-content/uploads/2020/09/turf-3.jpg",
      alt: "Gepflegter Garten mit Bäumen",
      description: "Premium-Raseninstallation",
      format: "normal",
      width: 350,
    },
    {
      src: "https://www.checkatrade.com/blog/wp-content/uploads/2021/04/Feature-Laying-turf-in-back-garden.jpg",
      alt: "Farbenfroher Blumengarten",
      description: "Wohnrasen-Installation",
      format: "square",
      width: 280,
    },
    {
      src: "https://www.bhg.com/thmb/zLhwAtOBQQMdIuJzQVfjuMJ1K8A=/1244x0/filters:no_upscale():strip_icc()/Mowing-lawn-and-leaving-grass-clippings-9f17741fa7a94a47b5ea58ec6a4ddf87.jpg",
      alt: "Formaler Garten mit Brunnen",
      description: "Umweltfreundliche Rasenpflege",
      format: "wide",
      width: 450,
    },
    {
      src: "https://cdn.images.express.co.uk/img/dynamic/13/590x/1956807_1.jpg",
      alt: "Gepflegter Garten mit Bäumen",
      description: "Saisonale Rasenbehandlung",
      format: "normal",
      width: 350,
    },
    {
      src: "https://www.shutterstock.com/shutterstock/videos/19781701/thumb/3.jpg?ip=x480",
      alt: "Farbenfroher Blumengarten",
      description: "Rasenbelüftung und Düngung",
      format: "square",
      width: 280,
    },
  ];

  const row3Images = [
    {
      src: "https://www.lacostegardencentre.com/files/images/news/how-to-plant-a-tree-1000x667-64c8f7fe946a7_n.jpg",
      alt: "Gewundener Gartenweg",
      description: "Experten-Baumpflanzservice",
      format: "normal",
      width: 350,
    },
    {
      src: "https://cdn.mos.cms.futurecdn.net/aWc2f96ZYsVBNvoN7dYwaC.jpg",
      alt: "Geschwungene Gartengrenze mit Steinen",
      description: "Installation ausgewachsener Bäume",
      format: "wide",
      width: 450,
    },
    {
      src: "https://www.southernstartree.com/images/blog/1624466489blog-0623-21.jpg",
      alt: "Kirschblütenbaum am Teich",
      description: "Auswahl von Zierbäumen",
      format: "square",
      width: 280,
    },
    {
      src: "https://www.nature-and-garden.com/wp-content/uploads/sites/4/2018/05/guide-to-plant-trees.jpg",
      alt: "Ausgewachsener Baum mit farbenfroher Landschaftsgestaltung",
      description: "Richtige Baumpflanztechniken",
      format: "normal",
      width: 350,
    },
    {
      src: "https://www.londonlawnturf.co.uk/wp/topsoil/wp-content/uploads/sites/3/2015/12/oak-tree1.jpg",
      alt: "Gepflegter Garten mit Bäumen",
      description: "Erhaltung historischer Eichen",
      format: "wide",
      width: 450,
    },
    {
      src: "https://www.thrive.org.uk/files/images/Gardens-plants-flowers/_hero/Small-tree-2.jpg",
      alt: "Kirschblütenbaum am Teich",
      description: "Zwergbaum-Gartengestaltung",
      format: "square",
      width: 280,
    },
    {
      src: "https://media.istockphoto.com/id/1448858330/photo/new-large-tree-plant-near-a-dug-hole-before-planting-urban-tree-planting-and-landscaping.jpg?s=612x612&w=0&k=20&c=tg-9DedNcl3p_A743svr1SS8tHcF_SpAvGDyzU2RqOw=",
      alt: "Ausgewachsener Baum mit farbenfroher Landschaftsgestaltung",
      description: "Großbaum-Verpflanzungsservice",
      format: "normal",
      width: 350,
    },
    {
      src: "https://www.rhs.org.uk/getmedia/af40ff97-aa6d-441c-bb79-d5718b098b5b/planting-tree-in-a-pot.jpg",
      alt: "Gepflegter Garten mit Bäumen",
      description: "Baumpflanzung in Containern",
      format: "wide",
      width: 450,
    },
    {
      src: "https://www.growingagreenerworld.com/wp-content/uploads/2017/04/BreakupRoots-LR.jpg",
      alt: "Kirschblütenbaum am Teich",
      description: "Wurzelpflege für gesunde Bäume",
      format: "square",
      width: 280,
    },
    {
      src: "https://images.finegardening.com/app/uploads/2014/04/14103104/FG119-plantingright-main-700x595.jpg",
      alt: "Ausgewachsener Baum mit farbenfroher Landschaftsgestaltung",
      description: "Professionelle Baumpflanzung",
      format: "normal",
      width: 350,
    },
    {
      src: TreeImage1,
      alt: "Gepflegter Garten mit Bäumen",
      description: "Baumpflanzung in Containern",
      format: "wide",
      width: 450,
    },
  ];

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
                alt={image.alt}
                className={styles.carouselImage}
              />
              <div className={styles.imageCaption}>{image.description}</div>
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
                alt={image.alt}
                className={styles.carouselImage}
              />
              <div className={styles.imageCaption}>{image.description}</div>
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
                alt={image.alt}
                className={styles.carouselImage}
              />
              <div className={styles.imageCaption}>{image.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
