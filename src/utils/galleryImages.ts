// utils/galleryImages.ts
const rawImages = [

   "/gallery/ahibba_summit/ahibba_summit.jpg",
   "/gallery/ahibba_summit/ahibba_summit2.jpg",
   "/gallery/ahibba_summit/ahibba_summit3.jpg",
  "/gallery/ahibba_summit/ahibba_summit4.jpg",
   "/gallery/ahibba_summit/ahibba_summit5.jpg",
  "/gallery/ahibba_summit/ahibba_summit6.jpg",
  "/gallery/ahibba_summit/ahibba_summit7.jpg",
  "/gallery/ahibba_summit/ahibba_summit8.jpg",
  "/gallery/ahibba_summit/ahibba_summit9.jpg",
  "/gallery/ahibba_summit/ahibba_summit10.jpg",
  "/gallery/ahibba_summit/ahibba_summit11.jpg",
 
];

// Automatically generate id + alt text
export const images = rawImages.map((src, index) => ({
  id: index + 1,
  src,
  alt: `Gallery image ${index + 1}`,
}));

// "/gallery/army_gust1.jpg",
// "/gallery/army_gust2.jpg",
// "/gallery/army_gust3.jpg",
// "/gallery/army_gust4.jpg",
// "/gallery/army_gust5.jpg",
// "/gallery/army_gust6.jpg",
// "/gallery/army_gust7.jpg",
// "/gallery/yes_care1.jpg",
// "/gallery/yes_care2.jpg",
// "/gallery/yes_care3.jpg",
// "/gallery/yes_care4.jpg",
// "/gallery/yes_care5.jpg",
// "/gallery/yes_care6.jpg",
// "/gallery/yes_care7.jpg",
