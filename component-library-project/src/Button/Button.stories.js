import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "./Button";

storiesOf("Button", module)
  .add("Primary", () => <Button label="Primary" type="primary" />)
  .add("Danger", () => <Button label="Danger" type="danger" />)
  .add("Success", () => <Button label="Success" type="success" />)
  .add("Warning", () => <Button label="Warning" type="warning" />)
  .add("Default", () => <Button label="Default" type="default" />)
  .add("Large Primary", () => <Button label="Primary" type="primary" large />)
  .add("Large Danger", () => <Button label="Danger" type="danger" large />)
  .add("Large Success", () => <Button label="Success" type="success" large />)
  .add("Large Warning", () => <Button label="Warning" type="warning" large />)
  .add("Large Default", () => <Button label="Default" type="default" large />)
  .add("Primary Outline", () => (
    <Button label="Primary" type="primary-outline" />
  ))
  .add("Large Primary Outline", () => (
    <Button label="Primary" type="primary-outline" large />
  ))
  .add("Danger Outline", () => <Button label="Danger" type="danger-outline" />)
  .add("Large Danger Outline", () => (
    <Button label="Danger" type="danger-outline" large />
  ))
  .add("Success Outline", () => (
    <Button label="Success" type="success-outline" />
  ))
  .add("Large Success Outline", () => (
    <Button label="Success" type="success-outline" large />
  ))
  .add("Warning Outline", () => (
    <Button label="Warning" type="warning-outline" />
  ))
  .add("Large Warning Outline", () => (
    <Button label="Warning" type="warning-outline" large />
  ))
  .add("Default Outline", () => (
    <Button label="Default" type="default-outline" />
  ))
  .add("Large Default Outline", () => (
    <Button label="Default" type="default-outline" large />
  ))
  .add("Primary Pale", () => (
    <Button label="Primary" type="primary-pale" />
  ))
  .add("Large Primary Pale", () => (
    <Button label="Primary" type="primary-pale" large />
  ))
  .add("Danger Pale", () => <Button label="Danger" type="danger-pale" />)
  .add("Large Danger Pale", () => (
    <Button label="Danger" type="danger-pale" large />
  ))
  .add("Success Pale", () => (
    <Button label="Success" type="success-pale" />
  ))
  .add("Large Success Pale", () => (
    <Button label="Success" type="success-pale" large />
  ))
  .add("Warning Pale", () => (
    <Button label="Warning" type="warning-pale" />
  ))
  .add("Large Warning Pale", () => (
    <Button label="Warning" type="warning-pale" large />
  ))
  .add("Default Pale", () => (
    <Button label="Default" type="default-pale" />
  ))
  .add("Large Default Pale", () => (
    <Button label="Default" type="default-pale" large />
  ));