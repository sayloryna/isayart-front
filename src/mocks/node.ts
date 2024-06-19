import { setupServer } from "msw/node";
import handlers from "../artworks/mocks/artworkHandler.js";

export const server = setupServer(...handlers);
