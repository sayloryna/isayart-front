import { render, screen } from "@testing-library/react";
import ArtworkForm from "./ArtworkForm";
import { MemoryRouter } from "react-router-dom";

describe("Given the ArtworkForm component", () => {
  describe("When its rendered", () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <ArtworkForm submit={async () => {}} />
        </MemoryRouter>,
      );
    });

    test("Then it should show an 'autor' form control ", () => {
      const expectedText = /autor/i;

      const authorInput = screen.getByLabelText(expectedText);

      expect(authorInput).toBeVisible();
    });

    test("Then it should show a 'título' form control ", () => {
      const expectedText = /título/i;

      const titleInput = screen.getByLabelText(expectedText);

      expect(titleInput).toBeVisible();
    });

    test("Then it should show an 'ubicación' form control ", () => {
      const expectedText = /ubicación/i;

      const titleInput = screen.getByLabelText(expectedText);

      expect(titleInput).toBeVisible();
    });

    test("Then it should show an 'alto' form control ", () => {
      const expectedText = /alto/i;

      const heightInput = screen.getByLabelText(expectedText);

      expect(heightInput).toBeVisible();
    });

    test("Then it should show an 'ancho' form control ", () => {
      const expectedText = /ancho/i;

      const widthInput = screen.getByLabelText(expectedText);

      expect(widthInput).toBeVisible();
    });

    test("Then it should show a 'técnica' form control ", () => {
      const expectedText = /técnica/i;

      const mediumInput = screen.getByLabelText(expectedText);

      expect(mediumInput).toBeVisible();
    });

    test("Then it should show an 'url de la obra' form control ", () => {
      const expectedText = /url de la obra/i;

      const artworkUrlInput = screen.getByLabelText(expectedText);

      expect(artworkUrlInput).toBeVisible();
    });

    test("Then it should show an 'descripción' form control ", () => {
      const expectedText = /descripción/i;

      const descriptionInput = screen.getByLabelText(expectedText);

      expect(descriptionInput).toBeVisible();
    });

    test("Then it should an 'Año de creación' form control", () => {
      const expectedText = /año de creación/i;

      const descriptionInput = screen.getByLabelText(expectedText);

      expect(descriptionInput).toBeVisible();
    });

    test("Then it should show a button 'Guardar'", () => {
      const expectedName = /guardar/i;

      const button = screen.getByRole("button", {
        name: expectedName,
      });

      expect(button).toBeVisible();
    });
  });
});
