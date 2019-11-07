const theme = {
  fontSizes: [12, 14, 16, 24, 32, 48, 64, 96, 128],
  space: [
    // margins and paddings
    0,
    4,
    8,
    16,
    32,
    64,
    128,
    256
  ],
  colors: {
    primary: "#000000",
    secondary: "#fff",
    text: "#101010"
  },
  breakpoints: ["20em", "30em", "40em", "48em", "64em"],
  zIndices: ["1", "2", "3", "4", "5"]
};

theme.breakpoints.tiny = "min-width:" + theme.breakpoints[0];
theme.breakpoints.small = "min-width:" + theme.breakpoints[1];
theme.breakpoints.medium = "min-width:" + theme.breakpoints[2];
theme.breakpoints.large = "min-width:" + theme.breakpoints[3];

export default theme;
