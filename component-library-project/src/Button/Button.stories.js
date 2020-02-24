import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "./Button";

import Cart from '../Icons/cart_2.svg';
import Heart from '../Icons/hearts.svg';

storiesOf("Button", module)
  //standard buttons

  .add("Primary", () => <Button label="Primary" type="primary" white hover />)
  .add("Danger", () => <Button label="Danger" type="danger" white hover />)
  .add("Success", () => <Button label="Success" type="success" white hover />)
  .add("Warning", () => <Button label="Warning" type="warning" white hover />)
  .add("Default", () => <Button label="Default" white hover />)

  //large buttons

  .add("Large Primary", () => (
    <Button label="Primary" type="primary" large white hover />
  ))
  .add("Large Danger", () => (
    <Button label="Danger" type="danger" large white hover />
  ))
  .add("Large Success", () => (
    <Button label="Success" type="success" large white hover />
  ))
  .add("Large Warning", () => (
    <Button label="Warning" type="warning" large white hover />
  ))
  .add("Large Default", () => <Button label="Default" large white hover />)

  //Outline buttons

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
  .add("Default Outline", () => <Button label="Default" outline />)
  .add("Large Default Outline", () => <Button label="Default" large outline />)

  //pale buttons

  .add("Primary Pale", () => <Button label="Primary" type="primary" pale />)
  .add("Large Primary Pale", () => (
    <Button label="Primary" type="primary" large pale />
  ))
  .add("Danger Pale", () => <Button label="Danger" type="danger" pale />)
  .add("Large Danger Pale", () => (
    <Button label="Danger" type="danger" large pale />
  ))
  .add("Success Pale", () => <Button label="Success" type="success" pale />)
  .add("Large Success Pale", () => (
    <Button label="Success" type="success" large pale />
  ))
  .add("Warning Pale", () => <Button label="Warning" type="warning" pale />)
  .add("Large Warning Pale", () => (
    <Button label="Warning" type="warning" large pale />
  ))
  .add("Default Pale", () => <Button label="Default" pale />)
  .add("Large Default Pale", () => <Button label="Default" large pale />)

  //icon buttons

  .add("heart button with text", () => (
    <Button label=" Add to Favorites" type="primary" pale icon={Heart} />
  ))
  .add("heart button no text", () => (
    <Button type="primary" pale none icon={Heart} />
  ))
  .add("cart button with text", () => (
    <Button label=" Add to Cart" type="primary" pale icon={Cart} />
  ))
  .add("cart button no text", () => (
    <Button type="primary" pale none icon={Cart} />
  ));
