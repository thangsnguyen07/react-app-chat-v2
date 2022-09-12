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
import { useNavigate } from "react-router-dom";

interface Props {
  conversations: Conversation[];
}

const ConversationSidebar: FC<Props> = ({ conversations }) => {
  const navigate = useNavigate();

  const onConversationClick = (conversationId: string): void => {
    navigate(`${conversationId}`);
  };

  return (
    <StyledConversationSidebar>
      <ConversationSidebarHeader>
        <h3>Sidebar Header</h3>
        <FiEdit size={32} />
      </ConversationSidebarHeader>
      <ConversationSidebarContainer>
        {conversations.map((conversation) => (
          <ConversationSidebarItem
            key={conversation.id}
            onClick={() => onConversationClick(conversation.id)}
          >
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
