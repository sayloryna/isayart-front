import { render, screen } from "@testing-library/react";
import { mockMonaLisa } from "../../../mocks/artworks";
import ArtworkCard from "./ArtworkCard";

describe("Given the ArtworkCard", () => {
  describe("When it receives the mona Lisa", () => {
    test("Then it should show a heading with 'La Mona Lisa'", () => {
      const expectedTitle = /la mona lisa/i;

      render(<ArtworkCard artwork={mockMonaLisa} />);

      const title = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(title).toBeVisible();
    });

    test("Then it should show the text'Leonardo Da Vinci'", () => {
      const expectedText = /leonardo da vinci/i;

      render(<ArtworkCard artwork={mockMonaLisa} />);

      const author = screen.getByText(expectedText);

      expect(author).toBeVisible();
    });

    test("Then it should show the text 'París, Francia'", () => {
      const expectedText = /parís, francia/i;

      render(<ArtworkCard artwork={mockMonaLisa} />);

      const location = screen.getByText(expectedText);

      expect(location).toBeVisible();
    });

    test("Then it should show the text '1500'", () => {
      const expectedText = /1500/i;

      render(<ArtworkCard artwork={mockMonaLisa} />);

      const year = screen.getByText(expectedText);

      expect(year).toBeVisible();
    });

    test("Then it should show an image with the alternative text 'retrato de la mona lisa casi sonriendo'", () => {
      const expectedAlternativeText = /retrato de la mona lisa casi sonriendo/i;

      render(<ArtworkCard artwork={mockMonaLisa} />);

      const image = screen.getByAltText(expectedAlternativeText);

      expect(image).toBeVisible();
    });

    test("Then it should show a button with the name 'borrar'", () => {
      const expectedName = /borrar/i;

      render(<ArtworkCard artwork={mockMonaLisa} />);

      const button = screen.getByRole("button", {
        name: expectedName,
      });

      expect(button).toBeVisible();
    });

    test("Then it should show a button with the name 'añadir a favoritos'", () => {
      const expectedName = /añadir a favoritos/i;

      render(<ArtworkCard artwork={mockMonaLisa} />);

      const button = screen.getByRole("button", {
        name: expectedName,
      });

      expect(button).toBeVisible();
    });
  });
});
