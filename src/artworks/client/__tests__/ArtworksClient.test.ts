import { http, HttpResponse } from "msw";
import { server } from "../../../mocks/node";
import {
  mockArtworks,
  mockMonaLisa,
  mockMonaLisaData,
  mockVitruvis,
} from "../../mocks/artworks";
import artworksClient from "../ArtworksClient";
import routes from "../../../routes/routes";
import { Artwork, ArtworkUpdate } from "../../types";

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

  describe("When its deleteArtworkById method is called with la monaLisaId", () => {
    describe("And the API rest responds with  the artwork 'la mona lisa'", () => {
      test("Then it should return the artwork 'la mona lisa'", async () => {
        const deletedArtwork = await client.deleteArtworkById(mockMonaLisa._id);

        expect(deletedArtwork).toEqual(mockMonaLisa);
      });
    });

    describe("And when the API rest responds with  the status 404", () => {
      test("Then it should throw the error: 'Request failed! Code: 404'", async () => {
        const statusCode = 404;
        const expectedError = new Error(`Request failed! Code: ${statusCode}`);

        server.use(
          http.delete(
            `${import.meta.env.VITE_API_URL}${routes.artworks}/${mockMonaLisa._id}`,
            () => {
              return HttpResponse.json<{ error: Error }>(
                {
                  error: new Error(),
                },
                { status: statusCode },
              );
            },
          ),
        );

        expect(async () => {
          await client.deleteArtworkById(mockMonaLisa._id);
        }).rejects.toThrowError(expectedError);
      });
    });
  });

  describe("When its getArtworkById method is called with the vitruvisId", () => {
    describe("And the API rest responds with  the artwork 'vitruvis man'", () => {
      test("Then it should return  the artwork 'vitruvis man'", async () => {
        const artwork = await client.getArtworkById(mockVitruvis._id);

        expect(artwork).toEqual(mockVitruvis);
      });
    });

    describe("And when the API rest responds with the status 400", () => {
      test("Then it should throw the error: 'Request failed! Code: 404'", async () => {
        const statusCode = 400;
        const expectedError = new Error(`Request failed! Code: ${statusCode}`);

        server.use(
          http.get(
            `${import.meta.env.VITE_API_URL}${routes.artworks}/${mockVitruvis._id}`,
            () => {
              return HttpResponse.json<{ error: Error }>(
                {
                  error: new Error(),
                },
                { status: statusCode },
              );
            },
          ),
        );

        expect(async () => {
          await client.getArtworkById(mockVitruvis._id);
        }).rejects.toThrowError(expectedError);
      });
    });
  });

  describe("When its updateArtwork method is called with the vitruvisId and isFAvourite : true ", () => {
    describe("And the API rest responds with  the artwork 'vitruvis man' with isFavourite: true", () => {
      test("Then it should return the artwork 'vitruvis man' with IsFavourire: true", async () => {
        const expectedIsFavouriteValue = true;
        const updatedArtwork: Artwork = {
          ...mockVitruvis,
          isFavourite: expectedIsFavouriteValue,
        };

        const updateData: ArtworkUpdate = {
          _id: mockVitruvis._id,
          update: {
            isFavourite: expectedIsFavouriteValue,
          },
        };

        const artwork = await client.updateArtwork(updateData);

        expect(artwork).toEqual(updatedArtwork);
      });
    });
  });

  describe("When its updateArtwork method is called with a notmatchingId and isFAvourite : true ", () => {
    describe("And the API rest responds with an error:'Request failed! Code: 500'", () => {
      test("Then it should throw the error:'Request failed! Code: 500' ", async () => {
        const wrongId = "notmacthingId";
        const expectedError = new Error("Request failed! Code: 500");
        const isFavouriteValue = true;

        const updateData: ArtworkUpdate = {
          _id: wrongId,
          update: {
            isFavourite: isFavouriteValue,
          },
        };

        expect(async () => {
          await client.updateArtwork(updateData);
        }).rejects.toThrowError(expectedError);
      });
    });
  });
});
