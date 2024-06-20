import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import ArtworkFormPage from "./ArtworkFormPage";
import { http, HttpResponse } from "msw";
import { server } from "../../../mocks/node";
import routes from "../../../routes/routes";
import { Bounce, ToastContainer } from "react-toastify";
import { mockMonaLisa } from "../../mocks/artworks";
import { Artwork } from "../../types";

describe("Given the ArtworkFormPage", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <ArtworkFormPage />
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
          theme="colored"
          transition={Bounce}
        />
      </MemoryRouter>,
    );
  });
  describe("When the user fills the form", () => {
    const user = userEvent.setup();

    const fillAndSubmitForm = async () => {
      const title = screen.getByLabelText(/título/i);
      const author = screen.getByLabelText(/autor/i);
      const description = screen.getByLabelText(/descripción/i);
      const location = screen.getByLabelText(/ubicación/i);
      const year = screen.getByLabelText(/año de creación/i);
      const width = screen.getByLabelText(/ancho/i);
      const height = screen.getByLabelText(/alto/i);
      const medium = screen.getByLabelText(/técnica/i);
      const artworkUrl = screen.getByLabelText(/url de la obra/i);

      await user.type(title, "la mona luisa");
      await user.type(author, "iker");
      await user.type(description, "reatrato de la mona luisa");
      await user.type(location, "barcelona, españa");
      await user.type(year, "1234");
      await user.type(width, "20");
      await user.type(height, "30");
      await user.type(medium, "30");
      await user.type(artworkUrl, "https://www.pygamovoliqa.mobi");

      const submitButton = screen.getByRole("button", {
        name: /guardar/i,
      });

      await user.click(submitButton);
    };

    describe("And the artwork is created", () => {
      test("Then it should show the text 'obra creada con éxito'", async () => {
        const expectedMessage = /obra añadida/i;

        await fillAndSubmitForm();

        const successMessage = screen.getByRole("heading", {
          name: expectedMessage,
        });

        expect(successMessage).toBeVisible();
      });
    });

    describe("And the artwork already exists ", () => {
      test("Then it should show the message: 'Fallo al crear la obra '", async () => {
        server.use(
          http.post(`${import.meta.env.VITE_API_URL}${routes.artworks}`, () => {
            return HttpResponse.json<{ newArtwork: Artwork }>(
              {
                newArtwork: mockMonaLisa,
              },
              { status: 409 },
            );
          }),
        );

        const expectedMessage = /fallo al crear la obra /i;

        await fillAndSubmitForm();

        const error = screen.getByText(expectedMessage);

        expect(error).toBeVisible();
      });
    });
  });
});
