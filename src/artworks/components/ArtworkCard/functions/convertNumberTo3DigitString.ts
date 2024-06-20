export const convertNumberto3DigitsString = (number: number): string => {
  if (number === 0) {
    return "100";
  }

  return (Math.abs(number) * 100).toString().slice(0, 3);
};
