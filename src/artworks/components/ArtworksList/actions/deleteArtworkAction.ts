import artworksClient from "../../../client/ArtworksClient";
import { notify, notifyError } from "../../ArtworkCard/toast/notify";

const deleteArtwork = async (artworkId: string): Promise<void> => {
  try {
    await artworksClient.deleteArtworkById(artworkId);
    notify();
  } catch (error) {
    notifyError(error as Error);
  }
};

export default deleteArtwork;
