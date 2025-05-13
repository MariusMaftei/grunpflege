// This is a centralized data store for all gallery images
// It can be used by both gallery.js and infinite-image-carousel.jsx

const galleryData = {
  // Garden Design images
  gardens: [
    {
      src: "https://firebasestorage.googleapis.com/v0/b/grunpflege-de.firebasestorage.app/o/gallery%2Fgardens%2Fflowers1.webp?alt=media&token=7c394871-c73a-442a-852c-b1a262f13d45",
      alt: "gardenDescriptions.perennialPath",
      description: "gardenDescriptions.perennialPath",
      format: "wide",
      width: 450,
      category: "gardens",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/grunpflege-de.firebasestorage.app/o/gallery%2Fgardens%2Fflowers2.webp?alt=media&token=30cd1b31-ca1d-4187-9e67-0c625cab332e",
      alt: "gardenDescriptions.japaneseGarden",
      description: "gardenDescriptions.japaneseGarden",
      format: "square",
      width: 280,
      category: "gardens",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/grunpflege-de.firebasestorage.app/o/gallery%2Fgardens%2Fflowers3.webp?alt=media&token=90957840-0871-413e-aaae-e5a1b0cb5c88",
      alt: "gardenDescriptions.formalTulip",
      description: "gardenDescriptions.formalTulip",
      format: "normal",
      width: 350,
      category: "gardens",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/grunpflege-de.firebasestorage.app/o/gallery%2Fgardens%2Fflowers4.webp?alt=media&token=692edb7b-09a4-4382-b94f-567e4c104ee3",
      alt: "gardenDescriptions.stoneBorder",
      description: "gardenDescriptions.stoneBorder",
      format: "wide",
      width: 450,
      category: "gardens",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/grunpflege-de.firebasestorage.app/o/gallery%2Fgardens%2Fflowers5.webp?alt=media&token=d032c1f1-2a9d-4384-9bae-218b40153cb7",
      alt: "gardenDescriptions.luxuryEstate",
      description: "gardenDescriptions.luxuryEstate",
      format: "square",
      width: 280,
      category: "gardens",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/grunpflege-de.firebasestorage.app/o/gallery%2Fgardens%2Fflowers6.webp?alt=media&token=5f9ba27e-27f5-4d36-bd19-fd00ec5b20a2",
      alt: "gardenDescriptions.springPlanning",
      description: "gardenDescriptions.springPlanning",
      format: "normal",
      width: 350,
      category: "gardens",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/grunpflege-de.firebasestorage.app/o/gallery%2Fgardens%2Fflowers7.webp?alt=media&token=72d6f23e-fd88-4678-b289-0bd0e586b64b",
      alt: "gardenDescriptions.springRevitalization",
      description: "gardenDescriptions.springRevitalization",
      format: "wide",
      width: 450,
      category: "gardens",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/grunpflege-de.firebasestorage.app/o/gallery%2Fgardens%2Fflowers8.webp?alt=media&token=0403a280-5874-4a01-ade1-eafad26ffbc0",
      alt: "gardenDescriptions.cottageDesign",
      description: "gardenDescriptions.cottageDesign",
      format: "square",
      width: 280,
      category: "gardens",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/grunpflege-de.firebasestorage.app/o/gallery%2Fgardens%2Fflowers9.webp?alt=media&token=9502b3d5-bed4-461f-9706-dc4d095255d0",
      alt: "gardenDescriptions.ecoFriendly",
      description: "gardenDescriptions.ecoFriendly",
      format: "normal",
      width: 350,
      category: "gardens",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/grunpflege-de.firebasestorage.app/o/gallery%2Fgardens%2Fflowers10.webp?alt=media&token=f7651b79-4105-4b64-865a-f528300a11e6",
      alt: "gardenDescriptions.colorfulSpring",
      description: "gardenDescriptions.colorfulSpring",
      format: "wide",
      width: 450,
      category: "gardens",
    },
  ],

  // Lawn Care images
  lawns: [
    {
      src: "https://firebasestorage.googleapis.com/v0/b/grunpflege-de.firebasestorage.app/o/gallery%2Flawns%2Flawn1.webp?alt=media&token=95cf962d-6505-43db-bfcd-9f1a2b64c88a",
      alt: "lawnDescriptions.premiumInstallation",
      description: "lawnDescriptions.premiumInstallation",
      format: "square",
      width: 280,
      category: "lawns",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/grunpflege-de.firebasestorage.app/o/gallery%2Flawns%2Flawn10.webp?alt=media&token=7339feb5-60d4-478c-8a66-38c638666336",
      alt: "lawnDescriptions.droughtResistant",
      description: "lawnDescriptions.droughtResistant",
      format: "wide",
      width: 450,
      category: "lawns",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/grunpflege-de.firebasestorage.app/o/gallery%2Flawns%2Flawn2.webp?alt=media&token=47a7a371-03a0-41ab-9d0f-76f1706b9a88",
      alt: "lawnDescriptions.ornamentalGrass",
      description: "lawnDescriptions.ornamentalGrass",
      format: "normal",
      width: 350,
      category: "lawns",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/grunpflege-de.firebasestorage.app/o/gallery%2Flawns%2Flawn3.webp?alt=media&token=94f091cb-dc4e-46d4-9366-3572d1133bd4",
      alt: "lawnDescriptions.professionalCare",
      description: "lawnDescriptions.professionalCare",
      format: "square",
      width: 280,
      category: "lawns",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/grunpflege-de.firebasestorage.app/o/gallery%2Flawns%2Flawn4.webp?alt=media&token=a1751e6c-7d62-44eb-88fe-1ca46360f37f",
      alt: "lawnDescriptions.completeRenovation",
      description: "lawnDescriptions.completeRenovation",
      format: "wide",
      width: 450,
      category: "lawns",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/grunpflege-de.firebasestorage.app/o/gallery%2Flawns%2Flawn5.webp?alt=media&token=2c58b018-5c09-4cad-a1af-f4e00b542426",
      alt: "lawnDescriptions.premiumInstallation",
      description: "lawnDescriptions.premiumInstallation",
      format: "normal",
      width: 350,
      category: "lawns",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/grunpflege-de.firebasestorage.app/o/gallery%2Flawns%2Flawn6.webp?alt=media&token=97b75b95-35de-4f5a-96f8-36be9961c737",
      alt: "lawnDescriptions.residentialInstallation",
      description: "lawnDescriptions.residentialInstallation",
      format: "square",
      width: 280,
      category: "lawns",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/grunpflege-de.firebasestorage.app/o/gallery%2Flawns%2Flawn7.webp?alt=media&token=5dbe73b8-3bcb-42be-91ba-3e0ffb4f4f6d",
      alt: "lawnDescriptions.ecoFriendlyCare",
      description: "lawnDescriptions.ecoFriendlyCare",
      format: "wide",
      width: 450,
      category: "lawns",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/grunpflege-de.firebasestorage.app/o/gallery%2Flawns%2Flawn8.webp?alt=media&token=55d11e2c-adc9-4c5e-9443-564077ce2369",
      alt: "lawnDescriptions.seasonalTreatment",
      description: "lawnDescriptions.seasonalTreatment",
      format: "normal",
      width: 350,
      category: "lawns",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/grunpflege-de.firebasestorage.app/o/gallery%2Flawns%2Flawn9.webp?alt=media&token=16fd3170-c96b-4036-a785-3e3efe2049cd",
      alt: "lawnDescriptions.aerationFertilization",
      description: "lawnDescriptions.aerationFertilization",
      format: "square",
      width: 280,
      category: "lawns",
    },
  ],

  // Tree Planting images
  trees: [
    {
      src: "https://firebasestorage.googleapis.com/v0/b/grunpflege-de.firebasestorage.app/o/gallery%2Ftrees%2Ftrees1.webp?alt=media&token=4ecf5aec-64e3-4681-be48-6cb6a406985b",
      alt: "treeDescriptions.expertPlanting",
      description: "treeDescriptions.expertPlanting",
      format: "normal",
      width: 350,
      category: "trees",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/grunpflege-de.firebasestorage.app/o/gallery%2Ftrees%2Ftrees2.webp?alt=media&token=02931f46-9786-4590-b165-2cc393e33b8d",
      alt: "treeDescriptions.matureTrees",
      description: "treeDescriptions.matureTrees",
      format: "wide",
      width: 450,
      category: "trees",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/grunpflege-de.firebasestorage.app/o/gallery%2Ftrees%2Ftrees3.webp?alt=media&token=f349b220-ac88-4e4e-9fe6-0b9df1e955b7",
      alt: "treeDescriptions.ornamentalSelection",
      description: "treeDescriptions.ornamentalSelection",
      format: "square",
      width: 280,
      category: "trees",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/grunpflege-de.firebasestorage.app/o/gallery%2Ftrees%2Ftrees4.webp?alt=media&token=8853d356-0e1c-4725-aaab-001ae3f05a01",
      alt: "treeDescriptions.properTechniques",
      description: "treeDescriptions.properTechniques",
      format: "normal",
      width: 350,
      category: "trees",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/grunpflege-de.firebasestorage.app/o/gallery%2Ftrees%2Ftrees5.webp?alt=media&token=2fd12428-6985-49ef-b42d-ec5db8f9f88f",
      alt: "treeDescriptions.historicOaks",
      description: "treeDescriptions.historicOaks",
      format: "wide",
      width: 450,
      category: "trees",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/grunpflege-de.firebasestorage.app/o/gallery%2Ftrees%2Ftrees6.webp?alt=media&token=a5bcd0d0-7f98-4417-b176-1bab244fd231",
      alt: "treeDescriptions.dwarfTreeDesign",
      description: "treeDescriptions.dwarfTreeDesign",
      format: "square",
      width: 280,
      category: "trees",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/grunpflege-de.firebasestorage.app/o/gallery%2Ftrees%2Ftrees12.webp?alt=media&token=8ded5dd3-2f3e-4e25-8d81-b90f02f89b17",
      alt: "treeDescriptions.largeTreeTransplanting",
      description: "treeDescriptions.largeTreeTransplanting",
      format: "normal",
      width: 350,
      category: "trees",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/grunpflege-de.firebasestorage.app/o/gallery%2Ftrees%2Ftrees7.webp?alt=media&token=6c1f44ae-f84e-4eb6-81e3-8d174cdb83c6",
      alt: "treeDescriptions.containerPlanting",
      description: "treeDescriptions.containerPlanting",
      format: "wide",
      width: 450,
      category: "trees",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/grunpflege-de.firebasestorage.app/o/gallery%2Ftrees%2Ftrees8.webp?alt=media&token=a6d833f7-970b-4e0a-8dde-32167e809bb3",
      alt: "treeDescriptions.rootCare",
      description: "treeDescriptions.rootCare",
      format: "square",
      width: 280,
      category: "trees",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/grunpflege-de.firebasestorage.app/o/gallery%2Ftrees%2Ftrees9.webp?alt=media&token=dc4b6439-de6f-41a0-aad4-2374121b8af3",
      alt: "treeDescriptions.professionalPlanting",
      description: "treeDescriptions.professionalPlanting",
      format: "normal",
      width: 350,
      category: "trees",
    },
  ],
};

// Helper function to get images for carousel rows
export const getCarouselRowImages = (category) => {
  return galleryData[category] || [];
};

// Helper function to get all images for gallery
export const getAllGalleryImages = () => {
  return [...galleryData.gardens, ...galleryData.lawns, ...galleryData.trees];
};

// Helper function to get images by category for gallery filtering
export const getImagesByCategory = (category) => {
  if (category === "all") {
    return getAllGalleryImages();
  }
  return galleryData[category] || [];
};

export default galleryData;
