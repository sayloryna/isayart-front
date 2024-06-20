import artworksClient from "../ArtworksClient";
import { Artwork, ArtworkUpdate } from "../../types";
import { notifyToggleIsFavouriteArtworksError } from "../../toasts/toggleArtworkIsfavourite/notify";

const toggleArtworkFavourite = async (artwork: Artwork): Promise<Artwork> => {
  const updateData: ArtworkUpdate = {
    _id: artwork._id,
    update: { isFavourite: !artwork.isFavourite },
  };
  try {
    const updatedArtwork = await artworksClient.updateArtwork(updateData);

    return updatedArtwork;
  } catch (error) {
    notifyToggleIsFavouriteArtworksError(error as Error);

    return artwork;
  }
};

export default toggleArtworkFavourite;
