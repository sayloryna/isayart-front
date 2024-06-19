import artworksClient from "../../../client/ArtworksClient";
import {
  notify,
  notifyDeleteArtworkError,
} from "../../../toasts/deleteArtworkkToast/notify";

const deleteArtwork = async (artworkId: string): Promise<void> => {
  try {
    await artworksClient.deleteArtworkById(artworkId);
    notify();
  } catch (error) {
    notifyDeleteArtworkError(error as Error);
  }
};

export default deleteArtwork;
