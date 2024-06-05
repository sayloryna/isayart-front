import { Artwork } from "../types";

export interface ArtworksClientStructure {
  getAll(): Promise<Artwork[]>;
}
