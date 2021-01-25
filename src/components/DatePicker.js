import React from "react";
import "react-day-picker/lib/style.css";
import { useField } from "formik";
import DayPickerInput from "react-day-picker/DayPickerInput";
import styles from "./Input/styles.module.scss";

const DatePicker = ({ changeFn, label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className={`${styles.container} ${meta.touched && meta.error ? styles.error : ""}`}>
      <label htmlFor={props.name}>{label}</label>
      <DayPickerInput
        dayPickerProps={{
          disabledDays: { before: new Date() },
          onDayClick: (day, { disabled, selected }) => {
            if (disabled) return;
            if (selected) return;
            changeFn(day);
          }
        }}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? <span className={styles.error}>{meta.error}</span> : null}
    </div>
  );
};

export default DatePicker;
