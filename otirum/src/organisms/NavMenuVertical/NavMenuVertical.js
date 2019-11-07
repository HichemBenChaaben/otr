import React from "react";
import Box from "../../atoms/Box";
import { StyledUl, StyledItem, StyledLink } from "./NavMenuVertical.styled";

const NavMenuVertical = () => (
  <StyledUl>
    <StyledItem>
      <Box>
        <StyledLink p={2}>Women</StyledLink>
      </Box>
    </StyledItem>
    <StyledItem>
      <Box>
        <StyledLink p={2}>Men</StyledLink>
      </Box>
    </StyledItem>
    <StyledItem>
      <Box>
        <StyledLink p={2}>Kids</StyledLink>
      </Box>
    </StyledItem>
  </StyledUl>
);

export default NavMenuVertical;
