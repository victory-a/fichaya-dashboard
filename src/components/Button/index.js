import React from "react";
import styles from "./styles.module.scss";

export default function Button(props) {
  return (
    <button className={styles.button} {...props}>
      {props.children}
    </button>
  );
}

export function OutlineButton(props) {
  return (
    <button className={`${styles.button} ${styles.outline}`} type={props.type} {...props}>
      {props.children}
    </button>
  );
}
