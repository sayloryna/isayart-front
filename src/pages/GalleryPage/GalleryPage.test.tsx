import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { http } from "msw";
import { render, screen } from "@testing-library/react";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { store } from "../../store/store";
import { ArtworksState } from "../../artworks/artworksSlice/types";
import { mockMonaLisa } from "../../artworks/mocks/artworks";
import GalleryPage from "./GalleryPage";
import { UiState } from "../../ui/uiSlice/types";
import { server } from "../../mocks/node";
import routes from "../../routes/routes";
import App from "../../components/App/App";

describe("given a GalleryPage component", () => {
  const initialUIState: UiState = {
    isLoading: false,
  };

  const mockUiSlice = createSlice({
    name: "ui",
    initialState: initialUIState,
    reducers: {},
  });

  describe("When the artworks list is empty", () => {
    test("Then it should show a heading with the text 'No hay obras en la Galería'", () => {
      const initialArtworksState: ArtworksState = {
        artworks: [],
      };

      const mockArtworksSlice = createSlice({
        name: "artworks",
        initialState: initialArtworksState,
        reducers: {},
      });

      const mockStore = configureStore({
        reducer: {
          artworks: mockArtworksSlice.reducer,
          ui: mockUiSlice.reducer,
        },
      });

      render(
        <Provider store={mockStore}>
          <GalleryPage />
        </Provider>,
      );
      const expectedText = /no hay obras en la galería/i;

      const title = screen.getByRole("heading", {
        name: expectedText,
      });

      expect(title).toBeVisible();
    });
  });

  describe("When the artworks list contains 'la mona Lisa'", () => {
    test("Then it should show a heading with the text 'la mona Lisa'", () => {
      const expectedText = /la mona lisa/i;

      const initialArtworksState: ArtworksState = {
        artworks: [mockMonaLisa],
      };

      const mockArtworksSlice = createSlice({
        name: "artworks",
        initialState: initialArtworksState,
        reducers: {},
      });

      const mockStore = configureStore({
        reducer: {
          artworks: mockArtworksSlice.reducer,
          ui: mockUiSlice.reducer,
        },
      });

      render(
        <Provider store={mockStore}>
          <GalleryPage />
        </Provider>,
      );

      const title = screen.getByRole("heading", {
        name: expectedText,
      });

      expect(title).toBeVisible();
    });
  });

  describe("When its laoding the artworks", () => {
    test("then it should show the text 'Cargando'", async () => {
      render(
        <Provider store={store}>
          <GalleryPage />
        </Provider>,
      );
      const expectedText = /cargando/i;

      const text = await screen.getByText(expectedText);

      expect(text).toBeVisible();
    });

    test("then it should show an image with the alternative text 'dibujo de un artista con bigote bufanda y boina'", () => {
      render(
        <Provider store={store}>
          <GalleryPage />
        </Provider>,
      );

      const expectedAlternativeText =
        /dibujo de un artista con bigote bufanda y boina/i;

      const image = screen.getByAltText(expectedAlternativeText);

      expect(image).toBeInTheDocument();
    });
  });
  describe("When the client throws the error cointaining: Unable to get Artworks", () => {
    server.use(
      http.get(`${import.meta.env.VITE_API_URL}${routes.artworks}`, () => {
        throw new Error();
      }),
    );

    test("then it should show a toast with the text:failed to fetch", () => {
      const expectedText = /unable to get artworks/i;

      render(
        <Provider store={store}>
          <MemoryRouter>
            <App />
          </MemoryRouter>
        </Provider>,
      );

      const toast = screen.getByText(expectedText);

      expect(toast).toBeVisible();
    });
  });
});