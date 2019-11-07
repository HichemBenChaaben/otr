import React, { forwardRef } from "react";
import Box from "../Box";

const Link = forwardRef((props, ref) => {
  return <Box ref={ref} as="a" {...props} />;
});

export default Link;
