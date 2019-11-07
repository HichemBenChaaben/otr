import React from "react";
import { StyledHeader } from "./Header.styled";

export default function Header(props) {
  return <StyledHeader zIndex={1} {...props} />;
}
