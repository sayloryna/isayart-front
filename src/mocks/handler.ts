import { http, HttpResponse } from "msw";
import { Artwork } from "../artworks/types";
import { mockArtworks } from "./artworks.js";
import routes from "../routes/routes.js";

const handlers = [
  http.get(`${import.meta.env.VITE_API_URL}${routes.artworks}`, () => {
    return HttpResponse.json<Artwork[]>(mockArtworks);
  }),
];

export default handlers;
