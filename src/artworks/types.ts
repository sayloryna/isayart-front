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

export interface NewArtworkData
  extends Omit<Artwork, "_id" | "isFavourite" | "size"> {
  width: number;
  height: number;
}
