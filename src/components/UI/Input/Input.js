import React, { forwardRef } from "react";
import classes from "./Input.module.css";

const Input = forwardRef((props, ref) => {
  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id} className={classes.label}>
        {props.label}
      </label>
      <div className={classes.inputWrap}>
        <input 
          ref={ref}
          id={props.id}
          type={props.type}
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
          className={classes.input}
          autoComplete="off"
        />
      </div>
    </div>
  );
});

export default Input;
