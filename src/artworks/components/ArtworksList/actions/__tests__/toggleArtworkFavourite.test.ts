import { mockMonaLisa } from "../../../../mocks/artworks";
import { Artwork } from "../../../../types";
import toggleArtworkFavourite from "../toggleArtworkFavouriteAction";

describe("Given a toggleArtworkAction function", () => {
  describe("When it receives the monalisa with favourite:false", () => {
    test("then it should return the monaLisa with isFavourite: true", async () => {
      const expectedMonalisa: Artwork = {
        ...mockMonaLisa,
        isFavourite: true,
      };

      const toggleledMonalisa = await toggleArtworkFavourite(mockMonaLisa);

      expect(toggleledMonalisa).toEqual(expectedMonalisa);
    });
  });
});
