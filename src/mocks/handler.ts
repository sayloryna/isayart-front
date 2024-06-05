import { http, HttpResponse } from "msw";
import { Artwork } from "../artworks/types";
import routes from "../routes/routes.js";
import { mockArtworks } from "../artworks/mocks/artworks.js";

const handlers = [
  http.get(`${import.meta.env.VITE_API_URL}${routes.artworks}`, () => {
    return HttpResponse.json<Artwork[]>(mockArtworks);
  }),
];

export default handlers;
