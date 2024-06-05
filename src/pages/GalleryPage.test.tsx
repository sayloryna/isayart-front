import { Provider } from "react-redux";
import { store } from "../store/store";
import GalleryPage from "./GalleryPage";
import { render, screen } from "@testing-library/react";

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
      render(
        <Provider store={store}>
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
