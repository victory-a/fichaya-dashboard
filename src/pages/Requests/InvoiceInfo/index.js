import React from "react";
import { useRequest } from "..";
import { Formik, Form } from "formik";

import { validateAmountInput } from "utils/validateAmount";
import { validationSchema } from "utils/validationSchema";

import Input, { AmountInput, PhoneInput, DummyInput } from "components/Input";
import DatePicker from "components/DatePicker";
import Button, { OutlineButton } from "components/Button";

import styles from "./styles.module.scss";

export default function InvoiceInfo() {
  const { state, dispatch } = useRequest();

  const [issueDate, setIssueDate] = React.useState(() => {
    if (state.issueDate) return state.issueDate;
    else return new Date();
  });

  const [dueDate, setDueDate] = React.useState(() => {
    if (state.dueDate) return state.dueDate;
    else return new Date();
  });

  const handleSubmit = values => {
    dispatch({
      type: "PREVIEW",
      payload: {
        ...values,
        issueDate,
        dueDate,
        totalAmount: (
          Number(values?.serviceAmount) +
          (Number(values?.serviceAmount) * Number(values?.VAT)) / 100
        ).toFixed(2)
      }
    });
  };

  const initialValues = {
    name: state.name,
    email: state.email,
    mobile: state.mobile,
    address: state.address,
    invoiceNumber: state.invoiceNumber,
    VAT: state.VAT,
    description: state.description,
    serviceAmount: state.serviceAmount
  };

  return (
    <>
      <h1 className="sectionTitle">Request Information</h1>
      <h2 className="sectionSubTitle">ENTER INVOICE INFO</h2>

      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values }) => (
          <Form>
            <div className={styles.grid}>
              <div className={styles.container}>
                <Input label="Customer/ Company name" name="name" placeholder="Enter name" />

                <div className={styles.inlineFields}>
                  <Input
                    label="Email address"
                    name="email"
                    placeholder="Enter email"
                    type="email"
                  />
                  <PhoneInput name="mobile" label="Phone number" placeholder="Enter Phone Number" />
                </div>

                <Input label="Home/ Building Address" name="address" placeholder="Enter address" />
              </div>
              <div className={styles.container}>
                <div className={styles.inlineFields}>
                  <DatePicker
                    {...{
                      changeFn: setIssueDate,
                      label: "Issue date",
                      name: "issueDate"
                    }}
                  />
                  <DatePicker {...{ changeFn: setDueDate, label: "Due date", name: "dueDate" }} />
                </div>

                <div className={styles.inlineFields}>
                  <Input
                    label="Invoice number"
                    name="invoiceNumber"
                    placeholder="Enter invoice number"
                    maxLength={9}
                  />
                  <Input label="V.A.T %" name="VAT" placeholder="VAT" type="number" />
                </div>

                <Input label="Service description" name="description" placeholder="Enter name" />

                <div className={styles.inlineFields}>
                  <AmountInput
                    label="Service amount"
                    name="serviceAmount"
                    placeholder="Enter service amount"
                    onChange={e => setFieldValue("serviceAmount", validateAmountInput(e))}
                  />

                  <DummyInput
                    label="Total amount"
                    name="totalAmount"
                    placeholder="₦0"
                    dependentField={true}
                    readOnly={true}
                    value={`₦${(
                      Number(values?.serviceAmount) +
                      (Number(values?.serviceAmount) * Number(values?.VAT)) / 100
                    ).toFixed(2)}`}
                  />
                </div>
              </div>
            </div>
            <div className={styles.buttonContainer}>
              <OutlineButton
                type="button"
                onClick={() => {
                  dispatch({ type: "INITIAL" });
                }}
              >
                cancel
              </OutlineButton>
              <Button>submit</Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
