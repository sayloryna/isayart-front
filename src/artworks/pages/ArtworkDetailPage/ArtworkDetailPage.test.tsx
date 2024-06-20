import { http } from "msw";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import routes from "../../../routes/routes";
import ArtworkDetailPage from "./ArtworkDetailPage";
import { store } from "../../../store/store";
import { server } from "../../../mocks/node";
import { mockVitruvis } from "../../mocks/artworks";
import NotFoundPage from "../../../pages/NotFoundPage/NotFoundPage";

describe("Given an artworkDetailPage", () => {
  describe("When rendered at '/characters/vitruvisId", () => {
    test("It should show the text 'Hombre desnudo dentro de un circulo que muestra las proporciones del cuerpo humano' ", async () => {
      const artworkId = "vitruvisId";
      const expectedText =
        /hombre desnudo dentro de un circulo que muestra las proporciones del cuerpo humano/i;

      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={[`${routes.artworks}/${artworkId}`]}>
            <Routes>
              <Route
                path={`${routes.artworks}/:artworkId`}
                element={<ArtworkDetailPage />}
              ></Route>
            </Routes>
          </MemoryRouter>
        </Provider>,
      );

      const description = await screen.findByText(expectedText);

      expect(description).toBeVisible();
    });

    describe("And there's no artwork with 'vitruvisId' ", async () => {
      test("Then it should show the text 'La página a la que intentas acceder no existe'", async () => {
        const expectedText = /la página a la que intentas acceder no existe/i;
        const artworkId = "vitruvisId";

        server.use(
          http.get(
            `${import.meta.env.VITE_API_URL}${routes.artworks}/${mockVitruvis._id}`,
            () => {
              throw new Error();
            },
          ),
        );

        render(
          <Provider store={store}>
            <MemoryRouter initialEntries={[`${routes.artworks}/${artworkId}`]}>
              <Routes>
                <Route
                  path={`${routes.artworks}/:artworkId`}
                  element={<ArtworkDetailPage />}
                ></Route>
                <Route path="*" element={<NotFoundPage />}></Route>
              </Routes>
            </MemoryRouter>
          </Provider>,
        );

        const text = await screen.findByText(expectedText);

        expect(text).toBeVisible();
      });
      test("Then it should show the error text 'No se encontró la obra seleccionada'", async () => {
        const expectedText = /no se encontró la obra seleccionada/i;
        const artworkId = "vitruvisId";

        server.use(
          http.get(
            `${import.meta.env.VITE_API_URL}${routes.artworks}/${mockVitruvis._id}`,
            () => {
              throw new Error();
            },
          ),
        );

        render(
          <Provider store={store}>
            <MemoryRouter initialEntries={[`${routes.artworks}/${artworkId}`]}>
              <Routes>
                <Route
                  path={`${routes.artworks}/:artworkId`}
                  element={<ArtworkDetailPage />}
                ></Route>
                <Route path={`*`} element={<NotFoundPage />}></Route>
              </Routes>
              <ToastContainer />
            </MemoryRouter>
          </Provider>,
        );

        const text = await screen.findByText(expectedText);

        expect(text).toBeVisible();
      });
    });
  });
});
