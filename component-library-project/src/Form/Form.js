import React from "react";
import "./Form.css";

let Form = props => {
  let classList = "";
  let types = ["email", "dropdown", "counter", "code"];

  if (types.includes(props.type)) {
    classList += ` form-${props.type}`;
  }
  if (props.medium) {
    classList += ` email-medium`;
  }
  if (props.large) {
    classList += ` email-large`;
  }

  return (
    <form>
      <input
        type="text"
        placeholder={props.placeholder}
        className={classList}
      />
    </form>
  );
};

export default Form;
