import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { ThemeProvider } from "emotion-theming";
import css from "@emotion/css/macro";
import { Global as EmotionGlobal } from "@emotion/core";
import { withKnobs } from "@storybook/addon-knobs";
import globalStyles from "../src/styles/global";
import theme from "../src/styles/theme";
import { withOptions } from "@storybook/addon-options";

addDecorator(storyFn => (
  <ThemeProvider theme={theme}>
    <EmotionGlobal styles={css(globalStyles)} />
    {storyFn()}
  </ThemeProvider>
));
addDecorator(withKnobs);

configure(require.context("../src", true, /\.stories\.js$/), module);

withOptions({
  name: "Otrium Storybook",
  sidebarAnimations: true,
  sortStoriesByKind: true,
  showDownPanel: true
});
