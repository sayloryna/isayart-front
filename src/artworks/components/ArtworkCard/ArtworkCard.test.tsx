import { http } from "msw";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import ArtworkCard from "./ArtworkCard";
import { mockMonaLisa } from "../../mocks/artworks";
import { store } from "../../../store/store";
import { RouterProvider } from "react-router";
import mainRouter from "../../../router/mainRouter";
import { server } from "../../../mocks/node";
import routes from "../../../routes/routes";

const user = userEvent.setup();

describe("Given the ArtworkCard", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <RouterProvider router={mainRouter} />
        <ArtworkCard artwork={mockMonaLisa} />,
      </Provider>,
    );
  });
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
      const expectedTitle = /obra eliminada/i;

      const button = screen.getByRole("button", {
        name: expectedName,
      });
      expect(button).toBeVisible();

      await user.click(button);

      const succesMessage = await screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(succesMessage).toBeInTheDocument();
    });

    test("Then it should show a button with the name 'añadir a favoritos'", () => {
      const expectedName = /añadir a favoritos/i;

      const button = screen.getByRole("button", {
        name: expectedName,
      });

      expect(button).toBeVisible();
    });
  });

  describe("And when the user clicks the 'mona lisa' delete buton", () => {
    describe("And it doesnt fails to delete", () => {
      test("Then it should show the message: 'Obra eliminada'", async () => {
        const expectedTitle = /obra eliminada/i;
        const expectedButtonName = /borrar/i;
        const button = screen.getByRole("button", {
          name: expectedButtonName,
        });

        await user.click(button);

        const succesMessage = await screen.getByRole("heading", {
          name: expectedTitle,
        });

        expect(succesMessage).toBeInTheDocument();
      });
    });

    describe("And it fails to delete", () => {
      test("Then it should show the message: 'Failed to delete'", async () => {
        server.use(
          http.delete(
            `${import.meta.env.VITE_API_URL}${routes.artworks}/${mockMonaLisa._id}`,
            () => {
              throw new Error();
            },
          ),
        );
        const expectedTitle = /failed to delete/i;
        const expectedButtonName = /borrar/i;
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
