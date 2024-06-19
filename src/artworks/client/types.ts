import { Artwork, ArtworkUpdate, NewArtworkData } from "../types";

export interface ArtworksClientStructure {
  getAll(): Promise<Artwork[]>;
  createArtwork(NewArtworkData: NewArtworkData): Promise<Artwork>;
  updateArtwork(update: ArtworkUpdate): Promise<Artwork>;
  deleteArtworkById(artworkId: string): Promise<Artwork>;
  getArtworkById(artworkId: string): Promise<Artwork>;
}
