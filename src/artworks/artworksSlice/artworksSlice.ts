import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
    updateArtworks: (currentState, action: PayloadAction<Artwork>) => {
      const updateArtwork = action.payload;
      const updatedArtworks = currentState.artworks.map((artwork) => {
        if (artwork._id === updateArtwork._id) {
          return updateArtwork;
        }
        return artwork;
      });
      return {
        ...currentState,
        artworks: updatedArtworks,
      };
    },
  },
});

export const {
  loadArtworks: loadArtworksActionCreator,
  updateArtworks: updateArtworksActionCreator,
} = artworksSlice.actions;

export const artworksReducer = artworksSlice.reducer;
