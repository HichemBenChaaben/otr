import styled from "@emotion/styled";
import Box from "../../atoms/Box";
import Link from "../../atoms/Link";

export const StyledLink = styled(Link)`
  height: 24px;
  width: 100px;
  align-self: center;
  > img {
    position: relative;
    height: 100%;
    width: 100%;
  }
`;

export const ContainerInner = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
`;
