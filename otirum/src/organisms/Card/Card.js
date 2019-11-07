import React from "react";
import { PropTypes } from "prop-types";
import Button from "../../molecules/Button";
import { Image, Flex, Box } from "../../atoms";
import { StyledCard, Bg, StyledText } from "./Card.styles";

export default function Card({
  img,
  btnLabel,
  label,
  href,
  cardLogo,
  ...restProps
}) {
  return (
    <StyledCard mb={3} bg={"secondary"} as="a" {...restProps}>
      <Bg bg={img}>
        <Image src={cardLogo} />
      </Bg>
      <Flex bg="white" p={2}>
        <Box>
          <StyledText as="span" color={"text"} fontSize={1}>
            {label}
          </StyledText>
        </Box>
        <Box fontSize={2}>
          <Button as="a">{btnLabel}</Button>
        </Box>
      </Flex>
    </StyledCard>
  );
}

Card.propTypes = {
  href: PropTypes.string,
  img: PropTypes.string,
  label: PropTypes.string,
  cardLogo: PropTypes.string
};
