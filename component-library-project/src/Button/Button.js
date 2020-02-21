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
  if(props.outline){
      classList += ` button-outline`
  }
  if(props.white){
      classList += ` button-white`
  }
  if(props.pale){
      classList += ` button-${props.type}-pale`
      classList += ` button-border`
  }
  return <button className={classList}>{props.label}</button>;
};

export default Button;
