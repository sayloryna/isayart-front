import { render, screen } from "@testing-library/react";
import ArtworkForm from "./ArtworkForm";

describe("Given the ArtworkForm component", () => {
  describe("When its rendered", () => {
    beforeEach(() => {
      render(<ArtworkForm />);
    });

    test("Then it should show the text 'Autor' in a form label", () => {
      const expectedText = /autor/i;

      const authorLabel = screen.getByLabelText(expectedText);

      expect(authorLabel).toBeVisible();
    });

    test("Then it should show an 'autor' form control ", () => {
      const expectedName = /autor/i;

      const authorInput = screen.getByRole("textbox", {
        name: expectedName,
      });

      expect(authorInput).toBeVisible();
    });

    test("Then it should show the text 'Título' in a form label", () => {
      const expectedText = /título/i;

      const titleLabel = screen.getByLabelText(expectedText);

      expect(titleLabel).toBeVisible();
    });

    test("Then it should show an 'título' form control ", () => {
      const expectedName = /título/i;

      const titleInput = screen.getByRole("textbox", {
        name: expectedName,
      });

      expect(titleInput).toBeVisible();
    });

    test("Then it should show the text 'Ubicación' in a form label", () => {
      const expectedText = /ubicación/i;

      const locationLabel = screen.getByLabelText(expectedText);

      expect(locationLabel).toBeVisible();
    });

    test("Then it should show an 'ubicación' form control ", () => {
      const expectedName = /ubicación/i;

      const titleInput = screen.getByRole("textbox", {
        name: expectedName,
      });

      expect(titleInput).toBeVisible();
    });

    test("Then it should show the text 'Alto' in a form label", () => {
      const expectedText = /alto/i;

      const heightLabel = screen.getByLabelText(expectedText);

      expect(heightLabel).toBeVisible();
    });

    test("Then it should show an 'alto' form control ", () => {
      const expectedName = /alto/i;

      const heightInput = screen.getByRole("spinbutton", {
        name: expectedName,
      });

      expect(heightInput).toBeVisible();
    });

    test("Then it should show the text 'Ancho' in a form label", () => {
      const expectedText = /ancho/i;

      const widhtLabel = screen.getByLabelText(expectedText);

      expect(widhtLabel).toBeVisible();
    });

    test("Then it should show an 'ancho' form control ", () => {
      const expectedName = /ancho/i;

      const weidhtInput = screen.getByRole("spinbutton", {
        name: expectedName,
      });

      expect(weidhtInput).toBeVisible();
    });

    test("Then it should show the text 'Técnica' in a form label", () => {
      const expectedText = /técnica/i;

      const mediumLabel = screen.getByLabelText(expectedText);

      expect(mediumLabel).toBeVisible();
    });

    test("Then it should show an 'técnica' form control ", () => {
      const expectedName = /técnica/i;

      const mediumInput = screen.getByRole("textbox", {
        name: expectedName,
      });

      expect(mediumInput).toBeVisible();
    });

    test("Then it should show the text 'Url de la obra' in a form label", () => {
      const expectedText = /url de la obra/i;

      const artworkUrlLabel = screen.getByLabelText(expectedText);

      expect(artworkUrlLabel).toBeVisible();
    });

    test("Then it should show an 'url de la obra' form control ", () => {
      const expectedName = /url de la obra/i;

      const artworkUrlInput = screen.getByRole("textbox", {
        name: expectedName,
      });

      expect(artworkUrlInput).toBeVisible();
    });

    test("Then it should show the text 'Descripción' in a form label", () => {
      const expectedText = /descripción/i;

      const descriptionLabel = screen.getByLabelText(expectedText);

      expect(descriptionLabel).toBeVisible();
    });

    test("Then it should show an 'descripción' form control ", () => {
      const expectedName = /descripción/i;

      const descriptionInput = screen.getByRole("textbox", {
        name: expectedName,
      });

      expect(descriptionInput).toBeVisible();
    });

    test("Then it should show the text 'Año de creación' in a form label", () => {
      const expectedText = /año de creación/i;

      const descriptionLabel = screen.getByLabelText(expectedText);

      expect(descriptionLabel).toBeVisible();
    });

    test("Then it should show a button 'Guardar'", () => {
      const exectedName = /guardar/i;

      const button = screen.getByRole("button", {
        name: exectedName,
      });

      expect(button).toBeVisible();
    });
  });
});
