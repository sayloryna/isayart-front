import { notifyCreateArtworkError } from "../../toasts/createArtworkToasts/notify";
import { Artwork } from "../../types";
import artworksClient from "../ArtworksClient";

const loadArtwork = async (artworkId: string): Promise<Artwork | void> => {
  try {
    return await artworksClient.getArtworkById(artworkId);
  } catch (error) {
    notifyCreateArtworkError(error as Error);
  }
};

export default loadArtwork;
