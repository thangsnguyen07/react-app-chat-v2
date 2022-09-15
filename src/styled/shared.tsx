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

export const OverlayStyle = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const ModalStyle = styled.div`
  background-color: ${(props) => props.theme.dark};
  width: 650px;
  border-radius: ${(props) => props.theme.borderRadius};
`;

export const ModalHeaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 24px;
  margin-top: 18px;
  color: #fff;

  h2 {
    font-weight: normal;
  }
`;

export const ModalBodyStyle = styled.div`
  width: 100%;
  color: #fff;
  padding: 18px;
`;
