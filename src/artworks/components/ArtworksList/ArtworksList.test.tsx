import { render, screen } from "@testing-library/react";
import ArtworkList from "./ArtworksList";
import { mockArtworks } from "../../mocks/artworks";
import { Provider } from "react-redux";
import { store } from "../../../store/store";
import { MemoryRouter } from "react-router-dom";

describe("Given the ArtworkList component", () => {
  describe("When it receive a list of artworks with 'la mona lisa' and 'Vitruvis man'", () => {
    test("Then it should show a heading with 'La mona Lisa' and a heading with 'Vitruvis man'", () => {
      const expectedMonaLisa = /la mona lisa/i;
      const expectedVitruvis = /vitruvis man/i;

      render(
        <Provider store={store}>
          <MemoryRouter>
            <ArtworkList artworks={mockArtworks} />,
          </MemoryRouter>
        </Provider>,
      );

      const monaLisa = screen.getByRole("heading", {
        name: expectedMonaLisa,
      });
      const vitruvisMan = screen.getByRole("heading", {
        name: expectedVitruvis,
      });

      expect(monaLisa).toBeVisible();
      expect(vitruvisMan).toBeVisible();
    });
  });
});
