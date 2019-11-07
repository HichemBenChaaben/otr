import React from "react";
import { storiesOf } from "@storybook/react";
import NavMenu from "./NavMenu";

storiesOf("ui/organisms/NavMenu", NavMenu).add("Normal", () => (
  <NavMenu>im a button</NavMenu>
));
