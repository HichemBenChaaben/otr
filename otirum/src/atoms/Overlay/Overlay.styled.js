import styled from "@emotion/styled";
import Box from "../Box";

export const StyledOverlay = styled(Box)`
  background-color: rgba(44, 44, 44, 0.3);
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  visibility: ${props => (props.show ? "visible" : "hidden")};
  opacity: ${props => (props.show ? "1" : "0")};
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
`;
