import { Artwork, NewArtworkData } from "../types";

export interface ArtworksClientStructure {
  getAll(): Promise<Artwork[]>;
  createArtwork(NewArtworkData: NewArtworkData): Promise<Artwork>;
  deleteArtworkById(artworkId: string): Promise<Artwork>;
}
