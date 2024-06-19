export interface Artwork {
  _id: string;
  title: string;
  author: string;
  description: string;
  year: number;
  artworkUrl: string;
  size: {
    width: number;
    height: number;
  };
  isFavourite: boolean;
  location: string;
  medium: string;
}
export interface ArtworkUpdate {
  _id: string;
  update: Partial<Artwork>;
}

export type ArtworkData = Omit<Artwork, "_id" | "isFavourite">;
export interface NewArtworkData {
  title: string;
  author: string;
  description: string;
  year: number;
  artworkUrl: string;
  width: number;
  height: number;
  location: string;
  medium: string;
}
