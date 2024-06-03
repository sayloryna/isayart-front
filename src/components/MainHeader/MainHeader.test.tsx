import { render, screen } from "@testing-library/react";
import MainHeader from "./MainHeader";

describe("Given the MainHeader component", () => {
  describe("When it receives 'Clara's gallery'", () => {
    test("Then it should show a heading with 'Clara's gallery'", () => {
      const expectedTitle = /clara's gallery/i;

      render(<MainHeader title={"Clara's gallery"} />);

      const title = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(title).toBeVisible();
    });
  });
});
