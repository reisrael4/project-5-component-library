import React from "react";
import "./Button.css";
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
  if (props.none) {
    classList += ` button-no-text`;
  }
  if (props.icon) {
    return (
      <button onClick={props.onClick} className={classList}>
        <img src={props.icon} alt=''></img>
        {props.label}
      </button>
    );
  }
  
  return <button className={classList}>{props.label}</button>;
};

export default Button;
