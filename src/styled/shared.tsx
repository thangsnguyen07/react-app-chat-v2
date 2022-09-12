import { Link } from "react-router-dom";
import styled from "styled-components";
import { PageProps } from "./styledProps";

export const Page = styled.div<PageProps>`
  height: 100vh;
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  background-color: ${(props) => props.theme.lightDark};
`;

export const LinkContainer = styled.div`
  margin: 8px 0;
  text-align: center;
`;

export const StyledLink = styled(Link)`
  color: #acabab;
  transition: ${(props) => props.theme.transition};

  &:hover {
    color: #fff;
  }
`;

export const ErrorFeedback = styled.p`
  font-size: 12px;
  color: red;
`;
