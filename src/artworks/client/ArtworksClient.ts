import routes from "../../routes/routes";
import { convertNewArtworkDataToArtworkData } from "../DTO/artworksConverts";
import { Artwork, ArtworkUpdate, NewArtworkData } from "../types";
import { ArtworksClientStructure } from "./types";

class ArtworksClient implements ArtworksClientStructure {
  async deleteArtworkById(artworkId: string): Promise<Artwork> {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}${routes.artworks}/${artworkId}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        },
      );

      if (!response.ok) {
        throw new Error("Request failed! Code: " + response.status);
      }

      const { deletedArtwork } = (await response.json()) as {
        deletedArtwork: Artwork;
      };

      return deletedArtwork;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
  async getArtworkById(artworkId: string): Promise<Artwork> {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}${routes.artworks}/${artworkId}`,
      );

      if (!response.ok) {
        throw new Error("Request failed! Code: " + response.status);
      }

      const { artwork } = (await response.json()) as {
        artwork: Artwork;
      };

      return artwork;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
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
  async createArtwork(NewArtworkData: NewArtworkData): Promise<Artwork> {
    const artworkData = convertNewArtworkDataToArtworkData(NewArtworkData);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}${routes.artworks}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(artworkData),
        },
      );

      const { newArtwork } = (await response.json()) as { newArtwork: Artwork };

      if (response.status === 409) {
        throw new Error(
          `Artwork with the title: ${NewArtworkData.title} already exist`,
        );
      }

      return newArtwork;
    } catch (error) {
      throw new Error("Failed to create Artwork: " + (error as Error).message);
    }
  }
  async updateArtwork(update: ArtworkUpdate): Promise<Artwork> {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}${routes.artworks}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(update),
        },
      );

      if (!response.ok) {
        throw new Error("Request failed! Code: " + response.status);
      }

      const { updatedArtwork } = (await response.json()) as {
        updatedArtwork: Artwork;
      };

      return updatedArtwork;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
}

const artworksClient = new ArtworksClient();

export default artworksClient;
