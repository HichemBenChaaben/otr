import React from "react";
import { PropTypes } from "prop-types";
import Container from "../../atoms/Container";
import Link from "../../atoms/Link";
import logo from "../../images/logo-otrium-black@3x.png";
import hamburger from "../../images/hamburger.svg";
import cart from "../../images/cart.svg";
import { ContainerInner, StyledLink } from "./NavBar.styled";

export default function NavBar({ onClick }) {
  return (
    <Container bg="white">
      <ContainerInner pt={2} pb={2}>
        <Link
          href="/"
          onClick={e => {
            e.preventDefault();
            onClick();
          }}
        >
          <img alt="burger" src={hamburger} />
        </Link>
        <StyledLink href="/">
          <img src={logo} alt="logo" />
        </StyledLink>
        <Link href="/">
          <img src={cart} alt="cart" />
        </Link>
      </ContainerInner>
    </Container>
  );
}

NavBar.propTypes = {
  onClick: PropTypes.func
};
