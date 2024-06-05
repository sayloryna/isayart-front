import { Provider } from "react-redux";
import { store } from "../store/store";
import GalleryPage from "./GalleryPage";
import { render, screen } from "@testing-library/react";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { ArtworksState } from "../artworks/artworksSlice/types";

import { mockMonaLisa } from "../artworks/mocks/artworks";

describe("given a GalleryPage component", () => {
  describe("When the artworks list is empty", () => {
    test("Then it should show a heading with the text 'No hay obras en la Galería'", () => {
      render(
        <Provider store={store}>
          <GalleryPage />
        </Provider>,
      );
      const expectedText = /No hay obras en la Galería/i;

      const title = screen.getByRole("heading", {
        name: expectedText,
      });

      expect(title).toBeVisible();
    });
  });

  describe("When the artworks list contains 'la mona Lisa'", () => {
    test("Then it should show a heading with the text 'la mona Lisa'", () => {
      const initialState: ArtworksState = {
        artworks: [mockMonaLisa],
      };
      const mockSlice = createSlice({
        name: "artworks",
        initialState,
        reducers: {},
      });

      const mockStore = configureStore({
        reducer: {
          artworks: mockSlice.reducer,
        },
      });

      render(
        <Provider store={mockStore}>
          <GalleryPage />
        </Provider>,
      );
      const expectedText = /la mona lisa/i;

      const title = screen.getByRole("heading", {
        name: expectedText,
      });

      expect(title).toBeVisible();
    });
  });
});
