import styled from "styled-components";
import { SIDEBAR_HEADER_HEIGHT, SIDEBAR_WIDTH } from "./constants";
import { MessageItemContentProps } from "./styledProps";

export const StyledConversationChannel = styled.div`
  height: 100%;
  margin-left: ${SIDEBAR_WIDTH};
  background-color: ${(props) => props.theme.lighterDark};
`;

export const StyledConversationSidebar = styled.aside`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${SIDEBAR_WIDTH};
  /* background-color: ${(props) => props.theme.lightestDark}; */
  border-right: 1px solid ${(props) => props.theme.lightestDark};
`;

export const ConversationSidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 18px;
  align-items: center;
  background-color: ${(props) => props.theme.dark};
  border-bottom: 1px solid ${(props) => props.theme.lightestDark};
  height: ${SIDEBAR_HEADER_HEIGHT};
  & h3 {
    font-weight: normal;
  }
`;

export const ConversationSidebarContainer = styled.div`
  height: calc(100% - ${SIDEBAR_HEADER_HEIGHT});
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.gray};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme.dark};
  }
`;

export const ConversationSidebarItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px 18px;
  border-bottom: 1px solid ${(props) => props.theme.lightestDark};
  background-color: ${(props) => props.theme.dark};
`;

export const ConversationSidebarItemAvatar = styled.div`
  background-color: #fff;
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;
export const ConversationSidebarItemName = styled.span`
  display: block;
  font-weight: bold;
`;
export const ConversationSidebarItemMessage = styled.span`
  color: ${(props) => props.theme.gray};
  font-size: 14px;
`;

export const StyledMessagePanel = styled.div`
  background: inherit;
  height: 100%;
  /* display: flex; */
  /* flex-direction: column; */
  /* position: relative; */
`;

export const StyledMessageContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  padding: 8px 0;
  overflow-y: auto;
`;

export const MessageItemContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin: 8px 0px;
  word-break: break-word;

  &:first-child {
    margin-bottom: 0px;
  }
`;

export const MessageInputContainer = styled.div`
  background-color: inherit;
  border-radius: 4px;
  padding: 16px 0;
`;

export const MessageInput = styled.input`
  background-color: #101010;
  outline: none;
  border: none;
  border-radius: 10px;
  padding: 16px;
  color: #454545;
  width: 100%;
`;

export const MessageItemAvatar = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff;
  border-radius: 50%;
  flex-shrink: 0;
`;

export const MessageItemDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MessageItemHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const MessageItemAuthor = styled.span`
  font-weight: 500;
`;

export const MessageItemTime = styled.span`
  color: #6d6d6d;
  font-size: 12px;
  font-weight: 500;
`;
export const MessageItemContent = styled.div<MessageItemContentProps>`
  margin: ${({ margin }) => margin};
`;

export const StyledMessagePanelHeader = styled.div`
  /* position: absolute; */
  /* top: 0; */
  /* left: 0; */
  /* right: 0; */
  background-color: ${(props) => props.theme.dark};
  height: ${SIDEBAR_HEADER_HEIGHT};
`;

export const MessagePanelBody = styled.div`
  height: calc(100% - ${SIDEBAR_HEADER_HEIGHT});
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  /* padding: ${SIDEBAR_HEADER_HEIGHT} 16px 0; */
`;
