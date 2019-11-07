import styled from "@emotion/styled";
import Link from "../../atoms/Link";

export const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StyledItem = styled.li`
  border-bottom: 1px solid #efefef;
  cursor: pointer;
  &:hover {
    background: black;
    color: white;
  }
  &:last-child {
    border: 0;
  }
`;

export const StyledLink = styled(Link)`
  background: white;
  color: black;
  display: block;
  &:hover {
    font-weight: bold;
  }
`;
