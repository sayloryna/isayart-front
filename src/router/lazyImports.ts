import { lazy } from "react";

export const NotFoundPage = lazy(
  () => import("../pages/NotFoundPage/NotFoundPage"),
);

export const GalleryPage = lazy(
  () => import("../artworks/pages/GalleryPage/GalleryPage"),
);

export const ArtworkFormPage = lazy(
  () => import("../artworks/pages/ArtworkFormPage/ArtworkFormPage"),
);
export const ArtworkDetailPage = lazy(
  () => import("../artworks/pages/ArtworkDetailPage/ArtworkDetailPage"),
);
