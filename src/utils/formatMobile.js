export const phoneCountryCodeFormat = number => {
  let formatted;

  if (number[0] === "0") {
    formatted = number.replace(/^0/, "234");
    return formatted;
  } else {
    formatted = `234${number}`;
    return formatted;
  }
};