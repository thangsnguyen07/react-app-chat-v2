import styled from "styled-components";

export const Form = styled.form`
  width: 800px;
`;

interface InputContainerProps {
  marginBottom?: string;
}
export const InputContainer = styled.div<InputContainerProps>`
  width: 100%;
  background-color: ${(props) => props.theme.dark};
  padding: 12px 16px;
  border-radius: ${(props) => props.theme.borderRadius};
  margin-bottom: ${(props) => props.marginBottom || "0"};
`;

export const InputField = styled.input`
  color: #fff;
  background-color: inherit;
  outline: none;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.lightDark};
  font-size: 16px;
  width: 100%;
  margin: 4px 0;
`;

export const InputLabel = styled.label`
  display: block;
  color: ${(props) => props.theme.lightDark};
  font-size: 14px;
  margin: 4px 0;
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 8px 0px;
  gap: 8px;
`;
