import styled from "@emotion/styled";
import {
  flexbox,
  space,
  color,
  fontSize,
  width,
  maxWidth,
  position
} from "styled-system";

const Box = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${maxWidth}
  ${flexbox}
  ${position}
`;

Box.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...fontSize.propTypes,
  ...color.propTypes,
  ...maxWidth.propTypes,
  ...flexbox.propTypes,
  ...position.propTypes
};

export default Box;
