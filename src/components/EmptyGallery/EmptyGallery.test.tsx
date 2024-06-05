import { render, screen } from "@testing-library/react";
import EmptyGallery from "./EmptyGallery";

describe("Given the EmptyGallery component", () => {
  describe("When rendered", () => {
    test("Then it should show a heading with 'No hay obras en la Galería'", () => {
      const expectedTitle = /no hay obras en la galería/i;

      render(<EmptyGallery />);

      const title = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(title).toBeVisible();
    });

    test("Then it should show an image with the alternative text 'retrato de Madame François Buron leyendo un libro con expresion excandalizada'", () => {
      const expectedText =
        /retrato de Madame François Buron leyendo un libro con expresion excandalizada/i;

      render(<EmptyGallery />);

      const image = screen.getByAltText(expectedText);

      expect(image).toBeVisible();
    });
  });
});
