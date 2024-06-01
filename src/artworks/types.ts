export interface Artwork {
  _id: string;
  title: string;
  author: string;
  description: string;
  date: string;
  artworkUrl: string;
  size: {
    width: number;
    height: number;
  };
  isFavourite: boolean;
}
