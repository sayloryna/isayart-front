import { MemoryRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { http } from "msw";
import { render, screen } from "@testing-library/react";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { server } from "../../../mocks/node";
import routes from "../../../routes/routes";
import { store } from "../../../store/store";
import { UiState } from "../../../ui/uiSlice/types";
import { ArtworksState } from "../../artworksSlice/types";
import { mockMonaLisa } from "../../mocks/artworks";
import GalleryPage from "./GalleryPage";
import mainRouter from "../../../router/mainRouter";
import { Artwork } from "../../types";
import { userEvent } from "@testing-library/user-event";
import { ToastContainer } from "react-toastify";

describe("given a GalleryPage component", () => {
  const initialUIState: UiState = {
    isLoading: false,
  };

  const mockUiSlice = createSlice({
    name: "ui",
    initialState: initialUIState,
    reducers: {},
  });

  function createMockStore(artworks: Artwork[]) {
    const initialArtworksState: ArtworksState = {
      artworks: artworks,
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
    return mockStore;
  }

  describe("When the artworks list is empty", () => {
    test("Then it should show a heading with the text 'No hay obras en la Galería'", () => {
      const mockStore = createMockStore([]);

      const expectedText = /no hay obras en la galería/i;

      render(
        <Provider store={mockStore}>
          <MemoryRouter>
            <GalleryPage />
          </MemoryRouter>
        </Provider>,
      );

      const title = screen.getByRole("heading", {
        name: expectedText,
      });

      expect(title).toBeVisible();
    });
  });

  describe("When the artworks list contains 'la mona Lisa'", () => {
    test("Then it should show a heading with the text 'la mona Lisa'", () => {
      const mockStore = createMockStore([mockMonaLisa]);

      render(
        <Provider store={mockStore}>
          <MemoryRouter>
            <GalleryPage />
          </MemoryRouter>
        </Provider>,
      );
      const expectedText = /la mona lisa/i;

      const title = screen.getByRole("heading", {
        name: expectedText,
      });

      expect(title).toBeVisible();
    });
  });

  describe("When its loading the artworks", () => {
    test("then it should show the text 'Cargando'", async () => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <GalleryPage />
          </MemoryRouter>
        </Provider>,
      );
      const expectedText = /cargando/i;

      const text = await screen.getByText(expectedText);

      expect(text).toBeVisible();
    });

    test("then it should show an image with the alternative text 'dibujo de un artista con bigote bufanda y boina'", () => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <GalleryPage />
          </MemoryRouter>
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
          <RouterProvider router={mainRouter} />
        </Provider>,
      );

      const toast = screen.getByText(expectedText);

      expect(toast).toBeVisible();
    });
  });

  describe("And when the user clicks the 'mona lisa' delete buton", () => {
    const user = userEvent.setup();
    describe("And it success to delete", () => {
      const mockStore = createMockStore([mockMonaLisa]);

      test("Then it should show the message: 'Obra eliminada'", async () => {
        const expectedTitle = /obra eliminada/i;
        const expectedButtonName = /borrar/i;

        render(
          <Provider store={mockStore}>
            <MemoryRouter>
              <GalleryPage />
              <ToastContainer />
            </MemoryRouter>
          </Provider>,
        );

        const button = screen.getByRole("button", {
          name: expectedButtonName,
        });

        await user.click(button);

        const succesMessage = await screen.findByRole("heading", {
          name: expectedTitle,
        });

        expect(succesMessage).toBeInTheDocument();
      });
    });

    describe("And it fails to delete", () => {
      const mockStore = createMockStore([mockMonaLisa]);

      test("Then it should show the message: 'Failed to delete'", async () => {
        render(
          <Provider store={mockStore}>
            <MemoryRouter>
              <GalleryPage />
              <ToastContainer />
            </MemoryRouter>
          </Provider>,
        );

        server.use(
          http.delete(
            `${import.meta.env.VITE_API_URL}${routes.artworks}/${mockMonaLisa._id}`,
            () => {
              throw new Error();
            },
          ),
        );
        const expectedTitle = /failed to delete/i;
        const expectedButtonName = /borrar/i;
        const button = screen.getByRole("button", {
          name: expectedButtonName,
        });

        await user.click(button);

        const failedMessage = await screen.findByText(expectedTitle);

        await expect(failedMessage).toBeInTheDocument();
      });
    });
  });
});
