import React from "react";
import { useRequest } from "..";

import styles from "./styles.module.scss";
import { ReactComponent as FichayaLogo } from "assets/fichaya-logo.svg";
import Button, { OutlineButton } from "components/Button";

const PreviewRequest = () => {
  const { state, dispatch } = useRequest();

  // TODO: Read data from state, format date where necessary
  const data = {
    name: "Spleet Nigeria Limited",
    email: "info@spleet.ng",
    mobile: "+2348140564969",
    address: "51, Iwaya Road, Onike Yaba",
    invoiceNumber: "",
    VAT: 7.5,
    description: "5 Bedroom Duplex post-con cleaning",
    serviceAmount: 48375,
    issueDate: "October 8, 2020",
    dueDate: "October 11, 2020"
  };

  state.VATAmount = (Number(state?.serviceAmount) * Number(state?.VAT / 100)).toFixed(2);

  return (
    <>
      <h1 className="sectionTitle">Generate invoice</h1>
      <h2 className="sectionSubTitle">PREVIEW YOUR INVOICE</h2>

      <div className={styles.container}>
        <ul className={styles.grid1}>
          <li>
            <FichayaLogo aria-label="fichaya logo" />
          </li>
          <li>
            <h2>invoice</h2>
          </li>

          <li className={styles.group}>
            <h2>from</h2>
            <h3>FICHAYA</h3>
            <p>finance@fichaya.com</p>
            <p>+2348177141611</p>
          </li>

          <li className={styles.group}>
            <div className={styles.status}>
              <h2>status</h2>
              <p>UNPAID</p>
            </div>
            <div className="created">
              <h2>created</h2>
              <p>{data?.issueDate}</p>
            </div>
          </li>

          <li className={`${styles.group} ${styles.bill}`}>
            <h2>bill to</h2>
            <h3>{state?.name}</h3>
            <p>{state?.email}</p>
            <p>{state?.address}</p>
            <p>{state?.mobile}</p>
          </li>

          <li className={styles.group}>
            <div>
              <h2>due</h2>
              <h3>{data?.dueDate}</h3>
            </div>

            <div>
              <h2>amount</h2>
              <p className={styles.amount}>{state?.serviceAmount}</p>
            </div>
          </li>
        </ul>

        <ul className={styles.grid2}>
          <li>
            <h2>description</h2>
            <p>{state?.description}</p>
          </li>
          <li>
            <h2>qty</h2>
            <p>1</p>
          </li>
          <li>
            <h2>unit price</h2>
            <p>{state?.serviceAmount}</p>
          </li>
          <li>
            <h2>amount</h2>
            <p>{state?.serviceAmount}</p>
          </li>
        </ul>

        <div className={styles.summary}>
          <div>
            <p>SUB-TOTAL</p>
            <p>{`NGN ${state?.serviceAmount}`}</p>
          </div>
          <div>
            <p>{`VAT (${state?.VAT} %)`}</p>
            <p>{`NGN ${state?.VATAmount}`}</p>
          </div>
          <div>
            <p>TOTAL</p>
            <p>{`NGN ${Number(state?.VATAmount) + Number(state?.serviceAmount)}`}</p>
          </div>
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <OutlineButton
          type="button"
          onClick={() => {
            dispatch({ type: "FORM" });
          }}
        >
          GO BACK
        </OutlineButton>
        <Button>SEND TO CUSTOMER</Button>
      </div>
    </>
  );
};

export default PreviewRequest;
