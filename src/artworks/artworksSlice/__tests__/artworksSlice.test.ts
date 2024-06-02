import { artworksReducer, loadArtworksActionCreator } from "../artworksSlice";
import { ArtworksState } from "../types";
import { mockArtworks } from "../../../mocks/artworks";

describe("Given an Artworks reducer", () => {
  describe("When it  receives a current state and an loadArtworksAction with a list of artworks with monalisa", () => {
    test("Then it should return a new state with the list of artworks with monalisa", () => {
      const currentState: ArtworksState = {
        artworks: [],
      };
      const expectedNewState: ArtworksState = {
        artworks: mockArtworks,
      };

      const action = loadArtworksActionCreator(mockArtworks);

      const newState = artworksReducer(currentState, action);

      expect(newState).toEqual(expectedNewState);
    });
  });
});
