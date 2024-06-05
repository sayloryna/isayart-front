import { render, screen } from "@testing-library/react";
import NotFoundPage from "./NotFoundPage";

describe("Given the NotFoundPage component", () => {
  describe("When rendered", () => {
    test("Then it should show a heading with 'la página a la que intentas acceder no existe'", () => {
      const expectedTitle = /la página a la que intentas acceder no existe/i;

      render(<NotFoundPage />);

      const title = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(title).toBeVisible();
    });

    test("Then it should show an image with the alternative text 'hombre con la boca abierta y espresion de sorpresa'", () => {
      const expectedText =
        /hombre con la boca abierta y espresion de sorpresa/i;

      render(<NotFoundPage />);

      const image = screen.getByAltText(expectedText);

      expect(image).toBeVisible();
    });

    test("Then it should show the text '404'", () => {
      const expectedTitle = /404/i;

      render(<NotFoundPage />);

      const text = screen.getByText(expectedTitle);

      expect(text).toBeVisible();
    });
  });
});
