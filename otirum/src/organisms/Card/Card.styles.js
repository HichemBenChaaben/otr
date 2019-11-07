import styled from "@emotion/styled";
import { Box, Text } from "../../atoms";

export const StyledCard = styled(Box)`
  width: 100%;
  font-size: 0;
  position: relative;
  &:hover {
    cursor: pointer;
    button,
    a {
      color: ${({ theme }) => theme.colors.secondary};
      background: ${({ theme }) => theme.colors.primary};
    }
  }
  @media (${({ theme }) => theme.breakpoints.medium}) {
    width: calc(50% - 8px);
  }
`;

export const StyledText = styled(Text)`
  letter-spacing: 1.4px;
  text-transform: uppercase;
`;

export const Bg = styled.div`
  background-image: url("${({ bg }) => bg}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  img {
    margin: 0 auto;
    display: block;
    bottom: -55px;
    position: relative;
    height: 214px;
    @media (${({ theme }) => theme.breakpoints.medium}) {
      height: 100%;
      width: 100%;
    }
  }
  &:before {
    content: "";
    bottom: 0;
    left: 0;
    position: absolute;
    display: block;
    height: 40%;
    width: 100%;
    background-blend-mode: multiply;
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.2) 33%,
      rgba(0, 0, 0, 0)
    );
  }
`;
