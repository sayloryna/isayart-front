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
}
