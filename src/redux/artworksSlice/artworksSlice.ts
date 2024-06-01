import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ArtworksState } from "./types";
import { Artwork } from "../../artworks/types";

const initialState: ArtworksState = {
  artworks: [],
};

export const artworksSlice = createSlice({
  name: "artworks",
  initialState,
  reducers: {
    loadArtworks: (currentState, action: PayloadAction<Artwork[]>) => {
      return {
        ...currentState,
        artworks: action.payload,
      };
    },
  },
});

export const { loadArtworks: loadArtworksActionCreator } =
  artworksSlice.actions;

export const artworksReducer = artworksSlice.reducer;
