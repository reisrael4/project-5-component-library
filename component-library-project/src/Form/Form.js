import React from 'react';
import "./Form.css";
import Button from "../Button/Button";

const Form = props => {
  let classList = "";
  let types = ["email", "dropdown", "counter", "code"];
  let placeholder = "";
  let callback ="";

  if (types.includes(props.type)) {
    classList += ` form-${props.type}`;
  }
  if (props.medium) {
    classList += ` ${props.type}-medium`;
  }
  if (props.large) {
    classList += ` ${props.type}-large`;
  }
  if(props.shadow) {
      classList += ` ${props.type}-shadow`;
  }
  if (!props.placeholder) {
    placeholder = `${props.label}`;
  } else {
    placeholder = `${props.placeholder}`;
  }
  if ((props.type === "email")) {
    return (
      <form>
        <input type="text" placeholder={placeholder} className={classList} />
      </form>
    );
  }
  if((props.type === "dropdown")){
      return (
        <form>
          <select className={classList}>
            <option default>{placeholder}</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>D</option>
          </select>
        </form>
      );
  }
  if((props.type === "code") && !props.large){
      return(
          <form>
              <input type="text" placeholder={placeholder} className={classList} />
              <Button type="primary" label={props.label} white/>
          </form>
      )
  }
  if (props.large && (props.type === "code")) {
    return (
      <form>
        <input type="text" placeholder={placeholder} className={classList} />
        <Button type="primary" label={props.label} large white />
      </form>
    );
  }
};

export default Form;
