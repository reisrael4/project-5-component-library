import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "./Button";

storiesOf("Button", module)
  .add("Primary", () => <Button label="Primary" type="primary" white />)
  .add("Danger", () => <Button label="Danger" type="danger" white />)
  .add("Success", () => <Button label="Success" type="success" white />)
  .add("Warning", () => <Button label="Warning" type="warning" white />)
  .add("Default", () => <Button label="Default" type="default" white />)
  .add("Large Primary", () => <Button label="Primary" type="primary" large white />)
  .add("Large Danger", () => <Button label="Danger" type="danger" large white />)
  .add("Large Success", () => <Button label="Success" type="success" large white />)
  .add("Large Warning", () => <Button label="Warning" type="warning" large white />)
  .add("Large Default", () => <Button label="Default" type="default" large white />)
  .add("Primary Outline", () => (
    <Button label="Primary" type="primary" outline />
  ))
  .add("Large Primary Outline", () => (
    <Button label="Primary" type="primary" large outline />
  ))
  .add("Danger Outline", () => <Button label="Danger" type="danger" outline />)
  .add("Large Danger Outline", () => (
    <Button label="Danger" type="danger" large outline />
  ))
  .add("Success Outline", () => (
    <Button label="Success" type="success" outline />
  ))
  .add("Large Success Outline", () => (
    <Button label="Success" type="success" large outline />
  ))
  .add("Warning Outline", () => (
    <Button label="Warning" type="warning" outline />
  ))
  .add("Large Warning Outline", () => (
    <Button label="Warning" type="warning" large outline />
  ))
  .add("Default Outline", () => (
    <Button label="Default" type="default" outline />
  ))
  .add("Large Default Outline", () => (
    <Button label="Default" type="default" large outline />
  ))
  .add("Primary Pale", () => (
    <Button label="Primary" type="primary" pale/>
  ))
  .add("Large Primary Pale", () => (
    <Button label="Primary" type="primary" large pale/>
  ))
  .add("Danger Pale", () => <Button label="Danger" type="danger" pale/>)
  .add("Large Danger Pale", () => (
    <Button label="Danger" type="danger" large pale/>
  ))
  .add("Success Pale", () => (
    <Button label="Success" type="success" pale/>
  ))
  .add("Large Success Pale", () => (
    <Button label="Success" type="success" large pale/>
  ))
  .add("Warning Pale", () => (
    <Button label="Warning" type="warning" pale/>
  ))
  .add("Large Warning Pale", () => (
    <Button label="Warning" type="warning" large pale/>
  ))
  .add("Default Pale", () => (
    <Button label="Default" type="default" pale/>
  ))
  .add("Large Default Pale", () => (
    <Button label="Default" type="default" large pale/>
  ));