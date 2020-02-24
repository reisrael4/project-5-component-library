import React, { Component } from "react";
import './Form.css';

class Checkbox extends Component {
  constructor() {
    super();
    this.state = {
      checked: false
    };
  }
  handleCheckboxChange = event =>
    this.setState({ checked: event.target.checked });
  render() {
    return (
      <div>
        <input type="checkbox" checked={this.state.checked} onClick={this.handleCheckboxChange}/>
        {this.props.label}
      </div>
    );
  }
}

export default Checkbox;
