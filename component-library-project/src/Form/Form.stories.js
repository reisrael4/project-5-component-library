import React from "react";
import { storiesOf } from "@storybook/react";
import Form from './Form'

storiesOf("Form", module)
  .add("Email", () => <Form label="Email" type="email" />)
  .add("Medium Email", () => <Form label="Email" type="email" medium/>)
  .add("Large Email", () => <Form label="Email" type='email' large/>)