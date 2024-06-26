import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import ArtworkCard from "./ArtworkCard";
import { mockMonaLisa } from "../../mocks/artworks";
import { store } from "../../../store/store";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("Given the ArtworkCard", () => {
  const toggleFavourite = vi.fn();
  const deleteArtwork = vi.fn();
  beforeEach(() => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ArtworkCard
            artwork={mockMonaLisa}
            deleteAction={deleteArtwork}
            toggleFavouriteAction={toggleFavourite}
          />
          ,
        </MemoryRouter>
      </Provider>,
    );
  });

  const user = userEvent.setup();

  describe("When it receives the mona Lisa", () => {
    test("Then it should show a heading with 'La Mona Lisa'", () => {
      const expectedTitle = /la mona lisa/i;

      const title = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(title).toBeVisible();
    });

    test("Then it should show the text'Leonardo Da Vinci'", () => {
      const expectedText = /leonardo da vinci/i;

      const author = screen.getByText(expectedText);

      expect(author).toBeVisible();
    });

    test("Then it should show the text 'París, Francia'", () => {
      const expectedText = /parís, francia/i;

      const location = screen.getByText(expectedText);

      expect(location).toBeVisible();
    });

    test("Then it should show the text '1500'", () => {
      const expectedText = /1500/i;

      const year = screen.getByText(expectedText);

      expect(year).toBeVisible();
    });

    test("Then it should show an image with the alternative text 'retrato de la mona lisa casi sonriendo'", () => {
      const expectedAlternativeText = /retrato de la mona lisa casi sonriendo/i;

      const image = screen.getByAltText(expectedAlternativeText);

      expect(image).toBeVisible();
    });

    test("Then it should show a button with the name 'borrar'", async () => {
      const expectedName = /borrar/i;

      const button = screen.getByRole("button", {
        name: expectedName,
      });
      expect(button).toBeVisible();
    });

    test("Then it should show a button with the name 'añadir a favoritos'", () => {
      const expectedName = /añadir a favoritos/i;

      const button = screen.getByRole("button", {
        name: expectedName,
      });

      expect(button).toBeVisible();
    });

    describe("And when the user clicks the favourite button", () => {
      test("then it should call its toggle action'", async () => {
        const expectedButtonName = mockMonaLisa.isFavourite
          ? /eliminar de favoritos/i
          : /añadir a favoritos/i;

        const button = await screen.getByRole("button", {
          name: expectedButtonName,
        });

        await user.click(button);

        expect(toggleFavourite).toHaveBeenCalled();
      });
    });
  });
});
