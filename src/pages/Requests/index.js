/* eslint-disable indent */
import React from "react";
import RequestInfo from "./RequestInfo";
import InvoiceInfo from "./InvoiceInfo";
import PreviewRequest from "./PreviewRequest";

const RequestContext = React.createContext();
RequestContext.displayName = "RequestContext";

export const initialState = {
  view: "base",
  name: "",
  email: "",
  mobile: "",
  address: "",
  invoiceNumber: "",
  VAT: 0,
  description: "",
  serviceAmount: ""
};

const Requests = () => {
  const { Provider } = RequestContext;
  const [state, dispatch] = React.useReducer(invoiceReducers, initialState);

  function render() {
    const { view } = state;

    switch (view) {
      case "base":
        return <RequestInfo />;
      case "form":
        return <InvoiceInfo />;
      case "preview":
        return <PreviewRequest />;

      default:
        return <RequestInfo />;
    }
  }

  return <Provider value={{ state, dispatch }}>{render()}</Provider>;
};

export default Requests;

// custom hook for access request context
export function useRequest() {
  const context = React.useContext(RequestContext);

  if (context === undefined) {
    throw new Error("useRequest must be used within a RequestProvider");
  }

  return context;
}

function invoiceReducers(state, action) {
  switch (action.type) {
    case "INITIAL":
      return { view: "base", ...initialState };
    case "FORM":
      return { ...state, view: "form" };
    case "PREVIEW":
      return { ...state, ...action.payload, view: "preview" };
    default:
      return state;
  }
}
