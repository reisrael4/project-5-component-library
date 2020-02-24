import React from "react";
import { storiesOf } from "@storybook/react";
import Form from './Form';
import Counter from './Counter';
import Checkbox from './Checkbox';

storiesOf("Form", module)
  .add("Email", () => <Form label="Email" type="email" input="text" />)
  .add("Medium Email", () => (
    <Form label="Email" type="email" input="text" medium />
  ))
  .add("Large Email", () => (
    <Form label="Email" type="email" input="text" large />
  ))
  .add("Small Dropdown", () => (
    <Form placeholder="Select" type="dropdown" input="select" />
  ))
  .add("Medium Dropdown", () => (
    <Form placeholder="Select" type="dropdown" input="select" medium />
  ))
  .add("Large Dropdown", () => (
    <Form placeholder="Select" type="dropdown" input="select" large />
  ))
  .add("Small Darker Dropdown", () => (
    <Form placeholder="Select" type="dropdown" input="select" shadow />
  ))
  .add("Medium Darker Dropdown", () => (
    <Form placeholder="Select" type="dropdown" input="select" medium shadow />
  ))
  .add("Large Darker Dropdown", () => (
    <Form placeholder="Select" type="dropdown" input="select" large shadow />
  ))
  .add("Small Voucher", () => (
    <Form label="Submit" placeholder="Voucher code" type="code" input="text" />
  ))
  .add("Large Voucher", () => (
    <Form label="Submit" placeholder="Voucher code" type="code" input="text" large />
  ))
  .add("Counter", () => <Counter type="counter" />)
  .add("Checkbox", () => (
      <Checkbox label="Don't show this popup again"/>
  ))