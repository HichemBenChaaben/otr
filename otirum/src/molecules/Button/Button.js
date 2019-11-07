import React, { forwardRef } from "react";
import { PropTypes } from "prop-types";
import Box from "../../atoms/Box";
import styled from "@emotion/styled";

const StyledButton = styled(Box)`
  appearance: none;
  background: ${({ theme }) => theme.colors.secondary};
  border: 0;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  display: inline-block;
  font-weight: 600px;
  height: 35px;
  line-height: 100%;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: background-color 300ms ease-in-out;
  width: 100%;
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
  }
  ${props =>
    props.active &&
    `
      background: ${props.theme.colors.primary};
      color: ${props.theme.colors.secondary};
  `};
`;

const Button = forwardRef((props, ref) => (
  <StyledButton
    ref={ref}
    as={props.as}
    active={props.active}
    py={2}
    px={4}
    {...props}
  />
));

Button.propTypes = {
  active: PropTypes.bool,
  as: PropTypes.oneOf(["button", "a"])
};

Button.defaultProps = {
  active: false,
  as: "button"
};

export default Button;
