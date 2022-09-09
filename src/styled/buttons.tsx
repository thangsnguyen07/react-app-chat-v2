import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  width: 100%;
  outline: none;
  border: none;
  background-color: #2b09ff;
  color: #fff;
  font-size: 16px;
  padding: 24px 0;
  border-radius: ${(props) => props.theme.borderRadius};
  margin-top: 8px;
  font-weight: 600;
  transition: ${(props) => props.theme.transition};

  &:hover,
  &:focus {
    background-color: #3415fd;
  }

  &:active {
    background-color: #2b09ff;
  }
`;
