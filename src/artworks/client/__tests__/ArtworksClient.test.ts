import { http, HttpResponse } from "msw";
import ArtworksClient from "../ArtworksClient";
import { mockArtworks } from "../../../mocks/artworks";
import { server } from "../../../mocks/node";

describe("Given a ArtworksClient getAll method", () => {
  describe("when its called and the API rest responds with a list of Artworks includin 'la mona Lisa'", () => {
    const client = new ArtworksClient();

    test("Then it should return a list of artworks containing 'la Mona Lisa", async () => {
      const expectedArtworks = [...mockArtworks];

      const artworks = await client.getAll();

      expect(artworks).toStrictEqual(expectedArtworks);
    });

    describe("When the api responds with a status code 500", () => {
      test("then it should throw an error:'Unable to get Artworks: Request failed! Code: 500'", async () => {
        server.boundary(() => {
          server.use(
            http.get(`${import.meta.env.VITE_API_URL}/artworks`, () => {
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
        })();
      });
    });
  });
});
