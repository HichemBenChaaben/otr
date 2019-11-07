import { space, fontSize, fontWeight, lineHeight, color } from "styled-system";
import styled from "@emotion/styled";

const Text = styled("div")`
  ${space}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${color}
`;

Text.propTypes = {
  ...space.propTypes,
  ...fontSize.propTypes,
  ...fontWeight.propTypes,
  ...lineHeight.propTypes,
  ...color.propTypes
};

export default Text;
