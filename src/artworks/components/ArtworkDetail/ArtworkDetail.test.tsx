import { render, screen } from "@testing-library/react";
import ArtworkDetail from "./ArtworkDetail";
import { mockMonaLisaPrado } from "../../mocks/artworks";

describe("Given the ArtworkDetail component", () => {
  describe("When it receives the 'mona lisa del prado' artwork", () => {
    beforeEach(() => {
      render(<ArtworkDetail artwork={mockMonaLisaPrado} />);
    });

    test("Then it should show a heading with 'la Mona Lisa del Prado", () => {
      const expectedTitle = /la mona lisa del prado/i;

      const title = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(title).toBeVisible();
    });

    test("Then it should show an img with  the alternativeText containg 'copia de la Mona Lisa de Leonardo da Vinci", () => {
      const expectedAlternativeText =
        /copia de la Mona Lisa de Leonardo da Vinci/i;

      const image = screen.getByAltText(expectedAlternativeText);

      expect(image).toBeVisible();
    });

    test("Then it should show the imagecaption 'desconocido, 1500", () => {
      const expectedAuthor = /desconocido, 1500/i;

      const author = screen.getByText(expectedAuthor);

      expect(author).toBeVisible();
    });

    test("Then it should show the text '100 x 100 cm'", () => {
      const expectedText = /100 x 100 cm/i;

      const text = screen.getByText(expectedText);

      expect(text).toBeVisible();
    });

    test("Then it should show the text 'pintura al óleo sobre tabla de álamo, ", () => {
      const expectedText = /pintura al óleo sobre tabla de álamo/i;

      const text = screen.getByText(expectedText);

      expect(text).toBeVisible();
    });

    test("Then it should show the text 'Madrid, España, ", () => {
      const expectedText = /madrid, españa/i;

      const text = screen.getByText(expectedText);

      expect(text).toBeVisible();
    });

    test("Then it should show the text 'La 'Mona Lisa del Prado' es una copia de la Mona Lisa de Leonardo da Vinci. Muestra la misma pose y fondo, pero con colores más vivos y detalles más precisos. Usa tonos claros y luminosos, especialmente en el paisaje y el vestido, con un fondo verde exuberante. El rostro es más juvenil y menos enigmático que el de la original'", () => {
      const expectedText =
        /La 'Mona Lisa del Prado' es una copia de la Mona Lisa de Leonardo da Vinci. Muestra la misma pose y fondo, pero con colores más vivos y detalles más precisos. Usa tonos claros y luminosos, especialmente en el paisaje y el vestido, con un fondo verde exuberante. El rostro es más juvenil y menos enigmático que el de la original/i;

      const text = screen.getByText(expectedText);

      expect(text).toBeVisible();
    });
  });
});
