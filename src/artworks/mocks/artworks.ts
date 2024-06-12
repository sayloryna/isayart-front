import { Artwork, NewArtworkData } from "../types";

export const mockMonaLisa: Artwork = {
  _id: "monalisaId",
  title: "La Mona Lisa",
  author: "Leonardo da Vinci",
  description: "retrato de la mona lisa casi sonriendo",
  year: 1500,
  artworkUrl:
    "https://user-uploads-thumbs.shutterstock.com/aws-cloudfront-user-asset-uploads-prod-us-east-1/uploads/727bdd08-0508-4ba5-8233-bb50447a985c/p/227af00d01d42da0311bdbb076a0fbfee9e3074a/1717339651433/dc7315c9-de08-4c6b-8b2a-e854e0217015/jpg/1717339655/1500x1500/fit/0ea4c9ce1b3797696630d9f5af3a94c6266d374a/dc7315c9-de08-4c6b-8b2a-e854e0217015.jpg",
  size: {
    width: 100,
    height: 100,
  },
  isFavourite: false,
  location: "París, Francia",
  medium: "Pintura al óleo sobre tabla de álamo",
};

export const mockVitruvis: Artwork = {
  _id: "vitruvisId",
  title: "Vitruvis Man",
  author: "Leonardo da Vinci",
  description:
    "Hombre desnudo con dentro de un circulo que muestra las proporciones del cuerpo humano",
  year: 1492,
  artworkUrl: "https://www.publico.es/uploads/2019/12/05/5de8f5ce26053.jpg",
  size: {
    width: 50,
    height: 50,
  },
  isFavourite: true,
  location: "Venecia, Italia",
  medium: "plumín, pluma y tinta sobre papel",
};

export const mockMonaLisaData: NewArtworkData = {
  ...mockMonaLisa,
  width: mockMonaLisa.size.width,
  height: mockMonaLisa.size.height,
};
export const mockArtworks = [mockMonaLisa, mockVitruvis];
