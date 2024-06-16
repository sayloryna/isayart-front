import { http, HttpResponse } from "msw";
import { Artwork } from "../artworks/types";
import routes from "../routes/routes.js";
import {
  mockArtworks,
  mockMonaLisa,
  mockVitruvis,
} from "../artworks/mocks/artworks.js";

const handlers = [
  http.get(`${import.meta.env.VITE_API_URL}${routes.artworks}`, () => {
    return HttpResponse.json<{ artworks: Artwork[] }>({
      artworks: mockArtworks,
    });
  }),

  http.post(`${import.meta.env.VITE_API_URL}${routes.artworks}`, () => {
    return HttpResponse.json<{ newArtwork: Artwork }>({
      newArtwork: mockMonaLisa,
    });
  }),

  http.delete(
    `${import.meta.env.VITE_API_URL}${routes.artworks}/${mockMonaLisa._id}`,
    () => {
      return HttpResponse.json<{ deletedArtwork: Artwork }>({
        deletedArtwork: mockMonaLisa,
      });
    },
  ),

  http.get(
    `${import.meta.env.VITE_API_URL}${routes.artworks}/${mockVitruvis._id}`,
    () => {
      return HttpResponse.json<{ artwork: Artwork }>({
        artwork: mockVitruvis,
      });
    },
  ),
];

export default handlers;
