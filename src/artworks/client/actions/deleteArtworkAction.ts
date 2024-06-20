import {
  notifyDeleteArtworkSuccess,
  notifyDeleteArtworkError,
} from "../../toasts/deleteArtworkToast/notify";
import artworksClient from "../ArtworksClient";

const deleteArtwork = async (artworkId: string): Promise<void> => {
  try {
    await artworksClient.deleteArtworkById(artworkId);
    notifyDeleteArtworkSuccess();
  } catch (error) {
    notifyDeleteArtworkError(error as Error);
  }
};

export default deleteArtwork;
