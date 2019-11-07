import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import Card from "./Card";

const withMaxWidth = storyFn => (
  <div style={{ margin: "0 auto", maxWidth: "60rem" }}>{storyFn()}</div>
);

const props = {
  label: "up to 65% off",
  img:
    "https://lookbook.otrium.com/wp-content/uploads/2019/11/DSC8666_2240x1000-1024x457.jpg",
  btnLabel: "Shop now",
  cardLogo:
    "https://lookbook.otrium.com/wp-content/uploads/2019/09/dune-london_logo_550x500_w.png"
};

storiesOf("ui/organisms/Card", Card)
  .addDecorator(withMaxWidth)
  .addDecorator(withKnobs)
  .add("Normal", () => <Card {...props} />);
