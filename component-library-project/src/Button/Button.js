import React from "react";
import "./Button.css";
//study prettier altering code trying again
const Button = props => {
  let classList = "";
  let types = ["primary", "danger", "success", "warning"];
  if (types.includes(props.type)) {
    classList += ` button-${props.type}`;
  }
  if (props.hover) {
    if (!props.type) {
      classList += ` button-default-hover`;
    } else {
      classList += ` button-${props.type}-hover`;
    }
  }
  if (props.large) {
    classList += ` button-large`;
  }
  if (props.outline) {
    classList += ` button-outline`;
  }
  if (props.white) {
    classList += ` button-white`;
  }
  if (props.pale) {
    if (!props.type) {
      classList += ` button-default-pale button-border`;
    } else {
      classList += ` button-${props.type}-pale button-border`;
    }
  }
  return <button className={classList}>{props.label}</button>;
};

export default Button;
