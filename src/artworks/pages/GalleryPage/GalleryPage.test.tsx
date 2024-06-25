import { userEvent } from "@testing-library/user-event";
import { MemoryRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { http } from "msw";
import { render, screen } from "@testing-library/react";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { ToastContainer } from "react-toastify";
import { server } from "../../../mocks/node";
import routes from "../../../routes/routes";
import { store } from "../../../store/store";
import { UiState } from "../../../ui/uiSlice/types";
import { ArtworksState } from "../../artworksSlice/types";
import { mockMonaLisa } from "../../mocks/artworks";
import GalleryPage from "./GalleryPage";
import mainRouter from "../../../router/mainRouter";
import { Artwork } from "../../types";

describe("given a GalleryPage component", () => {
  function createMockStore(artworks: Artwork[]) {
    const initialUIState: UiState = {
      isLoading: false,
    };

    const mockUiSlice = createSlice({
      name: "ui",
      initialState: initialUIState,
      reducers: {},
    });

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
      const expectedText = /la mona lisa/i;

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

  describe("When its loading the artworks", () => {
    test("then it should show the text 'Cargando'", async () => {
      const expectedText = /cargando/i;

      render(
        <Provider store={store}>
          <MemoryRouter>
            <GalleryPage />
          </MemoryRouter>
        </Provider>,
      );

      const text = await screen.getByText(expectedText);

      expect(text).toBeVisible();
    });

    test("then it should show an image with the alternative text 'dibujo de un artista con bigote bufanda y boina'", () => {
      const expectedAlternativeText =
        /dibujo de un artista con bigote bufanda y boina/i;

      render(
        <Provider store={store}>
          <MemoryRouter>
            <GalleryPage />
          </MemoryRouter>
        </Provider>,
      );

      const image = screen.getByAltText(expectedAlternativeText);

      expect(image).toBeInTheDocument();
    });
  });

  describe("When the client throws the error cointaining:'Imposible cargar obras'", () => {
    server.use(
      http.get(`${import.meta.env.VITE_API_URL}${routes.artworks}`, () => {
        throw new Error("Imposible cargar obras");
      }),
    );

    test("then it should show a toast with the text: Imposible cargar obras", () => {
      const expectedText = /imposible cargar obras/i;

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

    const mockStore = createMockStore([mockMonaLisa]);

    describe("And it success to delete", () => {
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

        expect(succesMessage).toBeVisible();
      });
    });

    describe("And it fails to delete", () => {
      test("Then it should show the message: 'Fallo al borrar la obra'", async () => {
        const expectedTitle = /fallo al borrar la obra/i;
        const expectedButtonName = /borrar/i;

        server.use(
          http.delete(
            `${import.meta.env.VITE_API_URL}${routes.artworks}/${mockMonaLisa._id}`,
            () => {
              throw new Error();
            },
          ),
        );

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

        const failedMessage = await screen.findByText(expectedTitle);

        await expect(failedMessage).toBeInTheDocument();
      });
    });
  });
});
