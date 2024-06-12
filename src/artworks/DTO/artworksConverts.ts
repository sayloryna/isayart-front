import { ArtworkData, NewArtworkData } from "../types";

export const convertNewArtworkDataToArtworkData = (
  NewArtworkData: NewArtworkData,
): ArtworkData => {
  return {
    title: NewArtworkData.title,
    author: NewArtworkData.author,
    description: NewArtworkData.description,
    location: NewArtworkData.location,
    medium: NewArtworkData.medium,
    artworkUrl: NewArtworkData.artworkUrl,
    year: NewArtworkData.year,
    size: {
      width: NewArtworkData.width,
      height: NewArtworkData.height,
    },
  };
};
