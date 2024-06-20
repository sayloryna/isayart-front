import { convertNumberto3DigitsString } from "../convertNumberTo3DigitString";

describe("Given a convertNumberTo3DigitString function", () => {
  describe("when it receives 3", () => {
    test("Then it should return '300'", () => {
      const number = 3;
      const expectedText = "300";

      const convertedNumber = convertNumberto3DigitsString(number);

      expect(convertedNumber).toBe(expectedText);
    });
  });

  describe("when it receives 5865", () => {
    test("Then it should return '586'", () => {
      const number = 5865;
      const expectedText = "586";

      const convertedNumber = convertNumberto3DigitsString(number);

      expect(convertedNumber).toBe(expectedText);
    });
  });

  describe("when it receives 0", () => {
    test("Then it should return '100'", () => {
      const number = 0;
      const expectedText = "100";

      const convertedNumber = convertNumberto3DigitsString(number);

      expect(convertedNumber).toBe(expectedText);
    });
  });

  describe("when it receives -10", () => {
    test("Then it should return '100'", () => {
      const number = -10;
      const expectedText = "100";

      const convertedNumber = convertNumberto3DigitsString(number);

      expect(convertedNumber).toBe(expectedText);
    });
  });

  describe("when it receives 0.5", () => {
    test("Then it should return '50'", () => {
      const number = 0.5;
      const expectedText = "50";

      const convertedNumber = convertNumberto3DigitsString(number);

      expect(convertedNumber).toBe(expectedText);
    });
  });
});
