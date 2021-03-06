import React, { forwardRef } from "react";
import Box from "../Box";

const Image = forwardRef((props, ref) => (
  <Box ref={ref} as="img" {...props} maxWidth="100%" height="auto" />
));

export default Image;
