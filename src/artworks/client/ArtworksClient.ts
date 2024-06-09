import routes from "../../routes/routes";
import { Artwork } from "../types";
import { ArtworksClientStructure } from "./types";

class ArtworksClient implements ArtworksClientStructure {
  async getAll(): Promise<Artwork[]> {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}${routes.artworks}`,
      );

      if (!response.ok) {
        throw new Error("Request failed! Code: " + response.status);
      }

      const { artworks } = (await response.json()) as { artworks: Artwork[] };

      return artworks;
    } catch (error) {
      throw new Error("Unable to get Artworks: " + (error as Error).message);
    }
  }
}

const artworksClient = new ArtworksClient();

export default artworksClient;
