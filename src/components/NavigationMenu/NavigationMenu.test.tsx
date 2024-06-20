import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavigationMenu from "./NavigationMenu";

describe("Given the NavigationMenu component", () => {
  describe("When rendered", () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <NavigationMenu />
        </MemoryRouter>,
      );
    });

    test("Then it should show a link with 'Galería'", () => {
      const expectedLinkText = /galería/i;

      const link = screen.getByRole("link", { name: expectedLinkText });

      expect(link).toBeInTheDocument();
    });

    test("Then it should show a link with 'Añadir'", () => {
      const expectedLinkText = /añadir/i;

      const link = screen.getByRole("link", { name: expectedLinkText });

      expect(link).toBeInTheDocument();
    });
  });
});
