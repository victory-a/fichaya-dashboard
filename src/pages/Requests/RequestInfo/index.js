import React from "react";
import { useRequest } from "..";
import styles from "./styles.module.scss";
import Dropdown from "components/DropDown.js";

export default function RequestInfo() {
  const { dispatch } = useRequest();

  return (
    <>
      <h1 className="sectionTitle">Request Information</h1>

      <div className={styles.container}>
        <ul className={styles.grid}>
          <li>
            <h2>REQUEST TYPE</h2>
            <p>POST-CON</p>
          </li>
          <li>
            <h2>CUStOMER NAME</h2>
            <p>PETER ABU-EKPESHIE</p>
          </li>
          <li>
            <h2>CLEANING DATE</h2>
            <p>09•10•2019</p>
          </li>
          <li>
            <h2>INVOICE STATUS</h2>
            <p className={styles.status}>UNGENERATED</p>
          </li>
          <li>
            <h2>REQUEST DATE</h2>
            <p>06•10•2016</p>
          </li>
          <li>
            <h2>REQUEST TIME</h2>
            <p>8:00 A.M</p>
          </li>
          <li>
            <h2>LOCATION</h2>
            <p>8, YOvi Street, IWAYA, ONIKE, YABA.</p>
          </li>
          <li>
            <h2>HOUSE-TYPE</h2>
            <p>5-BEDROOM DUPLEX</p>
          </li>
          <li>
            <h2>EXTRA INFORMATION</h2>
            <p>Some information </p>
          </li>
        </ul>
        <div className={styles.dropdownContainer}>
          <Dropdown
            onChange={() => {
              dispatch({
                type: "FORM"
              });
            }}
          />
        </div>
      </div>
    </>
  );
}
