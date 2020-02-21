import React from "react";
import "./Button.css";

const Button = props => {
  let classList = "";
  let types = [
    "primary",
    "danger",
    "success",
    "warning",
    "default",
    "primary-outline",
    "danger-outline",
    "success-outline",
    "warning-outline",
    "default-outline",
    "primary-pale",
    "danger-pale",
    "success-pale",
    "warning-pale",
    "default-pale"
  ];
  if (types.includes(props.type)) {
    classList += ` button-${props.type}`;
  }
  if (props.large) {
    classList += ` button-large`;
  }

  return <button className={classList}>{props.label}</button>;
};

export default Button;
