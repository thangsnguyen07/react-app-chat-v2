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
`;
