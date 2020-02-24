import React from "react";
import { storiesOf } from "@storybook/react";
import Form from './Form'

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
    <Form placeholder="Select" type="dropdown" input="select" shadow/>
  ))
  .add("Medium Darker Dropdown", () => (
    <Form placeholder="Select" type="dropdown" input="select" medium shadow/>
  ))
  .add("Large Darker Dropdown", () => (
    <Form placeholder="Select" type="dropdown" input="select" large shadow/>
  ));