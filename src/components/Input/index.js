import React from "react";
import { useField } from "formik";
import styles from "./styles.module.scss";
import NumberFormat from "react-number-format";

const Input = ({ label, type = "text", ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className={`${styles.container} ${meta.touched && meta.error ? styles.error : ""}`}>
      <label htmlFor={props.name}>{label}</label>
      <input id={props.name} type={type} {...field} {...props} />

      {meta.touched && meta.error ? <span className={styles.error}>{meta.error}</span> : null}
    </div>
  );
};

export const DummyInput = ({ label, type = "text", dependentField = false, ...props }) => {
  return (
    <div className={`${styles.container} ${dependentField ? "dependent" : ""}`}>
      <label htmlFor={props.name}>{label}</label>
      <input id={props.name} type={type} {...props} />
    </div>
  );
};

export const AmountInput = ({ label, dependentField = false, disabled = false, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className={`${styles.container} ${meta.touched && meta.error ? styles.error : ""}`}>
      <label htmlFor={props.name}>{label}</label>
      <NumberFormat
        decimalScale={2}
        disabled={disabled}
        isNumericString={true}
        allowNegative={false}
        thousandSeparator={true}
        prefix="₦"
        {...field}
        {...props}
      />

      {meta.touched && meta.error ? <span className={styles.error}>{meta.error}</span> : null}
    </div>
  );
};

export const PhoneInput = props => {
  const { label, name } = props;
  const [field, meta] = useField(props);

  return (
    <div className={`${styles.container} ${meta.touched && meta.error ? styles.error : ""}`}>
      <label htmlFor={name}>{label}</label>
      <NumberFormat type="tel" name={name} format="####-###-####" {...field} {...props} />

      {meta.touched && meta.error ? <span className={styles.error}>{meta.error}</span> : null}
    </div>
  );
};

export default Input;
