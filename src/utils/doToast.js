import cogoToast from "cogo-toast";

const doToast = (message, type, style = { position: "top-right" }) => {
  if (type === "success") {
    cogoToast.success(message, style);
  } else if (type === "error") {
    cogoToast.error(message, style);
  } else {
    cogoToast.info(message, style);
  }
};

export default doToast;
