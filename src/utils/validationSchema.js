import * as Yup from "yup";

const amountValidation = Yup.string()
  .required("Amount is required")
  .test("range", "min is 3000", val => {
    if (val !== undefined) {
      return val !== undefined && parseInt(val) >= 3000;
    }
  });

const mobileValidation = Yup.string()
  .required("Phone number is required.")
  .test("validity", "Kindly provide a valid phone number.", val => {
    if (val !== undefined && val.includes("-")) {
      const regex = new RegExp(/^0[789][01][0-9]-[0-9]{3}-[0-9]{4}$/, "i");
      return val.match(regex);
    } else if (val !== undefined) {
      const regexx = new RegExp(/^0[789][01][0-9]{8}$/, "i");
      return val.match(regexx);
    }
  });

const validateEmail = Yup.string()
  .trim()
  .email("enter a valid email")
  .required("email is required");

const randomText = Yup.string()
  .required("required")
  .max(256, "limit is 256 characters");

const invoiceValidation = Yup.number("must be a number").required("invoice number is required");

const VATValidation = Yup.number("must be a number")
  .max(100, "cannot exceed 100%")
  .required("VAT is required");

export const validationSchema = Yup.object().shape({
  name: randomText,
  email: validateEmail,
  mobile: mobileValidation,
  address: randomText,
  invoiceNumber: invoiceValidation,
  VAT: VATValidation,
  description: randomText,
  serviceAmount: amountValidation
});
