import {
  notifyCreateArtworkSuccess,
  notifyCreateArtworkError,
} from "../../toasts/createArtworkToasts/notify";

import { NewArtworkData } from "../../types";
import artworksClient from "../ArtworksClient";

const createArtwork = async (newArtworkData: NewArtworkData): Promise<void> => {
  try {
    await artworksClient.createArtwork(newArtworkData);

    notifyCreateArtworkSuccess();
  } catch (error) {
    notifyCreateArtworkError(error as Error);
  }
};

export default createArtwork;
