import { Artwork } from "../artworks/types";

export interface ArtworksClientStructure {
  getAll(): Promise<Artwork[]>;
}
