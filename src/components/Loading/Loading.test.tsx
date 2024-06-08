import { render, screen } from "@testing-library/react";
import Loading from "./Loading";

describe("Given a Loading component", () => {
  describe("When rendered", () => {
    test("Then it should show an image with the alternative text:'dibujo de un artista con bigote bufanda y boina' ", async () => {
      const expectedText = /dibujo de un artista con bigote bufanda y boina/i;

      render(<Loading />);

      const image = await screen.findByAltText(expectedText);

      expect(image).toBeInTheDocument();
    });

    test("Then it should show the text:'cargando...' ", async () => {
      const expectedText = /cargando.../i;

      render(<Loading />);

      const text = await screen.findByText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });
});
