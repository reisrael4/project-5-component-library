import React, { Component } from "react";
import './Form.css'
import Button from '../Button/Button'

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
        <div className="counter">
          <Button
            onClick={this.decreaseCount}
            className="minus"
            label="-"
            type="primary"
            outline
          />
          <p className="count">{this.state.count}</p>
          <Button
            onClick={this.increaseCount}
            className="plus"
            label="+"
            type="primary"
            outline
          />
        </div>
      </div>
    );
  }
}

export default Counter;