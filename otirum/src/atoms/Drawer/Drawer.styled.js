import styled from "@emotion/styled";
import Box from "../Box";
import Text from "../Text";

const drawerWidth = "300px";

export const StyledDrawer = styled(Box)`
  background: white;
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  height: 100%;
  left: 0;
  overflow-y: auto;
  position: fixed;
  top: 0;
  transform: none;
  transform: translate(${props => (props.isOpen ? 0 : `-${drawerWidth}`)});
  transition: transform 300ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  width: 45%;
  max-width: ${drawerWidth};
`;

export const StyledClose = styled(Text)`
  text-decoration: none;
  text-align: right;
  cursor: pointer;
`;
