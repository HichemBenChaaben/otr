import styled from "@emotion/styled";
import Button from "../../molecules/Button";
import { Flex } from "../../atoms";

export const StyledButton = styled(Button)`
  font-weight: 600;
  height: 42px;
  line-height: 42px;
  padding-bottom: 0;
  padding-top: 0;
  text-align: center;
  text-transform: uppercase;
`;

export const StyledContainer = styled(Flex)`
  padding-top: 20px;
  padding-bottom: 20px;
`;
