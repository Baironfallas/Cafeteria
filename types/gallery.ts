export type GalleryCategory = "Ambiente" | "Técnica" | "Proceso" | "Productos" | "Experiencia";

export interface GalleryItem {
  id: number;
  title: string;
  category: GalleryCategory;
  image: string;
  description: string;
}
