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

export type ArtworkData = Omit<Artwork, "_id" | "isFavourite">;
export interface NewArtworkData extends Omit<ArtworkData, "size"> {
  width: number;
  height: number;
}
