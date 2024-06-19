import { mockArtworks, mockMonaLisa } from "../../mocks/artworks";
import {
  artworksReducer,
  loadArtworksActionCreator,
  updateArtworksActionCreator,
} from "../artworksSlice";
import { ArtworksState } from "../types";

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

  describe("When it  receives a current state and an updateArtworksAction with la monalisa with the author:'desconocido'", () => {
    test("Then it should return a new state with the list of artworks with monalisa with author 'desconocido'", () => {
      const currentState: ArtworksState = {
        artworks: [mockMonaLisa],
      };
      const modifiedMonalisa = { ...mockMonaLisa, author: "desconocido" };

      const expectedNewState: ArtworksState = {
        artworks: [modifiedMonalisa],
      };

      const action = updateArtworksActionCreator(modifiedMonalisa);

      const newState = artworksReducer(currentState, action);

      expect(newState).toEqual(expectedNewState);
    });
  });
});
