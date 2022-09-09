import { Link } from "react-router-dom";
import styled from "styled-components";

export const Page = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.lightestDark};
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
