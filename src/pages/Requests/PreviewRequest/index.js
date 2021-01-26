import React from "react";
import { useRequest } from "..";
import dayjs from "dayjs";

import Button, { OutlineButton } from "components/Button";
import { phoneCountryCodeFormat } from "utils/formatMobile";
import doToast from "utils/doToast";
import styles from "./styles.module.scss";
import { ReactComponent as FichayaLogo } from "assets/fichaya-logo.svg";

const PreviewRequest = () => {
  const { state, dispatch } = useRequest();

  const VATAmount = ((Number(state?.serviceAmount) * Number(state?.VAT)) / 100).toFixed(2);
  const totalAmount = Number(state?.VAT) + Number(state?.serviceAmount);
  const formattedMobile = phoneCountryCodeFormat(state.mobile);

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
              <p>{state?.issueDate ? dayjs(state.issueDate).format("MMMM DD, YYYY") : ""}</p>
            </div>
          </li>

          <li className={`${styles.group} ${styles.bill}`}>
            <h2>bill to</h2>
            <h3>{state?.name}</h3>
            <p>{state?.email}</p>
            <p>{state?.address}</p>
            <p>{`+${formattedMobile}`}</p>
          </li>

          <li className={styles.group}>
            <div>
              <h2>due</h2>
              <p>{state?.dueDate ? dayjs(state.dueDate).format("MMMM DD, YYYY") : ""}</p>
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
            <p>{`NGN ${VATAmount}`}</p>
          </div>
          <div>
            <p>TOTAL</p>
            <p>{`NGN ${totalAmount}`}</p>
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
        <Button type="button" onClick={() => doToast("Sent Successfully!", "success")}>
          SEND TO CUSTOMER
        </Button>
      </div>
    </>
  );
};

export default PreviewRequest;
