import React from "react";
import { Box } from "../../atoms";
import { StyledContainer, StyledButton } from "./NavMenu.styled";

export default function NavMenu() {
  return (
    <StyledContainer>
      <Box width={1 / 3} mx={2} ml={0}>
        <StyledButton as="a" active>
          Women
        </StyledButton>
      </Box>
      <Box width={1 / 3} mx={2}>
        <StyledButton as="a">Men</StyledButton>
      </Box>
      <Box width={1 / 3} mx={2} mr={0}>
        <StyledButton as="a">Kids</StyledButton>
      </Box>
    </StyledContainer>
  );
}
