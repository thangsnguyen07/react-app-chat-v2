import { FC } from "react";
import {
  ConversationSidebarContainer,
  ConversationSidebarHeader,
  ConversationSidebarItem,
  ConversationSidebarItemAvatar,
  ConversationSidebarItemMessage,
  ConversationSidebarItemName,
  StyledConversationSidebar,
} from "../../styled/conversation";
import { FiEdit } from "react-icons/fi";
import { Conversation } from "../../utils/interfaces";

interface Props {
  conversations: Conversation[];
}

const ConversationSidebar: FC<Props> = ({ conversations }) => {
  return (
    <StyledConversationSidebar>
      <ConversationSidebarHeader>
        <h3>Sidebar Header</h3>
        <FiEdit size={32} />
      </ConversationSidebarHeader>
      <ConversationSidebarContainer>
        {conversations.map((conversation) => (
          <ConversationSidebarItem key={conversation.id}>
            <ConversationSidebarItemAvatar></ConversationSidebarItemAvatar>
            <div>
              <ConversationSidebarItemName>
                {conversation.name}
              </ConversationSidebarItemName>
              <ConversationSidebarItemMessage>
                {conversation.lastMessage}
              </ConversationSidebarItemMessage>
            </div>
          </ConversationSidebarItem>
        ))}
      </ConversationSidebarContainer>
    </StyledConversationSidebar>
  );
};

export default ConversationSidebar;
