import React from "react";
import "./Form.css";

let Form = props => {
  let classList = "";
  let types = ["email", "dropdown", "counter", "code"];
  let placeholder = "";

  if (types.includes(props.type)) {
    classList += ` form-${props.type}`;
  }
  if (props.medium) {
    classList += ` email-medium`;
  }
  if (props.large) {
    classList += ` email-large`;
  }
  if (!props.placeholder){
        placeholder = `${props.label}`
  } else{
      placeholder = `${props.placeholder}`
  }

  return (
    <form>
      <input
        type="text"
        placeholder={placeholder}
        className={classList}
      />
    </form>
  );
};

export default Form;
