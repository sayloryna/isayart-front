import { Artwork } from "../artworks/types";
import { ArtworksClientStructure } from "./types";

class ArtworksClient implements ArtworksClientStructure {
  async getAll(): Promise<Artwork[]> {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/artworks`);

      if (!response.ok) {
        throw new Error("Request failed! Code: " + response.status);
      }

      return (await response.json()) as Artwork[];
    } catch (error) {
      throw new Error("Unable to get Artworks: " + (error as Error).message);
    }
  }
}

export default ArtworksClient;
