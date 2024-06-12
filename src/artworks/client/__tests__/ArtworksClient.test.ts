import { http, HttpResponse } from "msw";
import { server } from "../../../mocks/node";
import {
  mockArtworks,
  mockMonaLisa,
  mockMonaLisaData,
} from "../../mocks/artworks";
import artworksClient from "../ArtworksClient";
import routes from "../../../routes/routes";
import { Artwork } from "../../types";

describe("Given an ArtworksClient", () => {
  const client = artworksClient;
  describe("When its getArtworks method is called and the API rest responds with a list of Artworks including 'la mona Lisa'", () => {
    test("Then it should return a list of artworks containing 'la Mona Lisa", async () => {
      const expectedArtworks = [...mockArtworks];

      const artworks = await client.getAll();

      expect(artworks).toStrictEqual(expectedArtworks);
    });

    describe("And when the api responds with a status code 500", () => {
      test("then it should throw an error:'Unable to get Artworks: Request failed! Code: 500'", async () => {
        server.use(
          http.get(`${import.meta.env.VITE_API_URL}${routes.artworks}`, () => {
            return new HttpResponse(null, {
              status: 500,
            });
          }),
        );

        const expectedError =
          "Unable to get Artworks: Request failed! Code: 500";

        expect(async () => {
          await client.getAll();
        }).rejects.toThrowError(expectedError);
      });
    });
  });

  describe("When its createArwork method its called with 'La mona lisa' data and the API rest responds with 'la Mona Lisa' with an _id", () => {
    test("Then it should return 'La mona lisa' with an _id", async () => {
      const newArtwork = await client.createArtwork(mockMonaLisaData);

      expect(newArtwork).toStrictEqual(mockMonaLisa);
    });

    describe("And  when the apiRest responds wiht the status code 409", () => {
      const statusCode = 409;

      test("Then it should throw the error'Failed to create Artwork: Artwork with the title: La Mona Lisa already exist' ", async () => {
        const expectedError =
          "Failed to create Artwork: Artwork with the title: La Mona Lisa already exist";

        server.use(
          http.post(`${import.meta.env.VITE_API_URL}${routes.artworks}`, () => {
            return HttpResponse.json<{ newArtwork: Artwork }>(
              {
                newArtwork: mockMonaLisa,
              },
              { status: statusCode },
            );
          }),
        );

        expect(async () => {
          await client.createArtwork(mockMonaLisaData);
        }).rejects.toThrowError(expectedError);
      });
    });
  });
});
