import { http, HttpResponse } from "msw";
import { Artwork } from "../artworks/types";
import { mockArtworks } from "./artworks.js";

const handlers = [
  http.get(`${import.meta.env.VITE_API_URL}/artworks`, () => {
    return HttpResponse.json<Artwork[]>(mockArtworks);
  }),
];

export default handlers;
