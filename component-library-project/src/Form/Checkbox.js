import React, { Component } from "react";
import "./Form.css";

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }
  handleCheckboxChange = event =>
    this.setState({ checked: event.target.checked });
  render() {
    return (
      <div className="check-container">
        <input
          type="checkbox"
          checked={this.state.checked}
          onClick={this.handleCheckboxChange}
          label={this.props.label}
        />
      </div>
    );
  }
}

export default Checkbox;
