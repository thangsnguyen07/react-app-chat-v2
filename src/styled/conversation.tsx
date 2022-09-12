import styled from "styled-components";
import { SIDEBAR_HEADER_HEIGHT, SIDEBAR_WIDTH } from "./constants";

export const StyledConversationChannel = styled.div`
  height: 100%;
  margin-left: ${SIDEBAR_WIDTH};
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
  overflow-y: scroll;
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
