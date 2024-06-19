import { http, HttpResponse, PathParams } from "msw";
import { Artwork, ArtworkUpdate } from "../types.js";
import routes from "../../routes/routes.js";
import { mockArtworks, mockMonaLisa, mockVitruvis } from "./artworks.js";

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

  http.patch<PathParams, ArtworkUpdate>(
    `${import.meta.env.VITE_API_URL}${routes.artworks}`,
    async ({ request }) => {
      const updateData = await request.json();
      const id = updateData._id;
      const update = updateData.update;

      const updatedArtworks = mockArtworks.map((artwork) => {
        if (artwork._id === id) {
          const updatedArtwork = Object.assign(artwork, update);
          return updatedArtwork;
        }
        return artwork;
      });

      const updatedArtwork = updatedArtworks.find(
        (artwork) => artwork._id === id,
      );
      if (!updatedArtwork) {
        throw new Error("Failed to update");
      }
      return HttpResponse.json<{ updatedArtwork: Artwork }>({
        updatedArtwork,
      });
    },
  ),
];

export default handlers;
