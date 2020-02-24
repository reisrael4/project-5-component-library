import React, { Component } from 'react';
import "./Form.css";

const Form = props => {
  let classList = "";
  let types = ["email", "dropdown", "counter", "code"];
  let placeholder = "";

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
};

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  increaseCount = () => {
    let count = this.state.count + 1;
    this.setState({
      count: count
    });
  };
  decreaseCount = () => {
    let count = this.state.count - 1;
    this.setState({
      count: count
    });
  };

  render() {
    return (
      <div>
        <div>
          <h1>Count: {this.state.count}</h1>
          <button onClick={this.increaseCount}>+</button>
          <button onClick={this.decreaseCount}>-</button>
        </div>
      </div>
    );
  }
}


export default {
    Counter, 
    Form
};
