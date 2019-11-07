import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";

storiesOf("ui/molecules/Button", Button).add("Normal", () => (
  <Button>im a button</Button>
));
