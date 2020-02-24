import React from "react";
import { storiesOf } from "@storybook/react";
import Form from './Form'

storiesOf("Form", module)
  .add("Email", () => <Form placeholder="Email" type="email" />)
  .add("Medium Email", () => <Form placeholder="Email" type="email" medium/>)
  .add("Large Email", () => <Form placeholder="Email" type='email' large/>)