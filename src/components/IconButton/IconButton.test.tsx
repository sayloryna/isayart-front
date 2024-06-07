import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import IconButton from "./IconButton";

const user = userEvent.setup();

describe("Given the IconButton component", () => {
  const buttonAction = vi.fn();
  const source = "/icon/heart-icon.svg";
  const alternativeText = "red heart";

  describe("When it receives an image with the alternative text:'red heart'", () => {
    test("Then it should show an image with the alternative text: 'red heart'", () => {
      const expectedAlternativeText = /red heart/i;

      render(
        <IconButton
          action={buttonAction}
          source={source}
          alternativeText={alternativeText}
          className=""
        />,
      );

      const image = screen.getByAltText(expectedAlternativeText);

      expect(image).toBeVisible();
    });
  });

  describe("When the user clicks it", () => {
    test("Then it should call its action", async () => {
      const buttonName = /red heart/i;

      render(
        <IconButton
          action={buttonAction}
          source={source}
          alternativeText={alternativeText}
          className=""
        />,
      );

      const button = screen.getByRole("button", {
        name: buttonName,
      });

      await user.click(button);

      expect(buttonAction).toHaveBeenCalled();
    });
  });
});
