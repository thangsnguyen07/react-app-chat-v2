import { FC, useContext, useState } from "react";
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
import CreateConversationModal from "../modals/CreateConversationModal";
import {
  AuthContext,
  AuthContextInterface,
} from "../../utils/context/AuthContext";

interface Props {
  conversations: Conversation[];
}

const ConversationSidebar: FC<Props> = ({ conversations }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext) as AuthContextInterface;
  const [showModal, setShowModal] = useState<boolean>(false);

  const onConversationClick = (conversationId: number): void => {
    navigate(`${conversationId}`);
  };

  const toggleModal = () => setShowModal((prev) => !prev);

  const getDisplayUser = (conversation: Conversation) => {
    const userId = user?.id;
    const { creator, recipient } = conversation;

    return creator.id === userId ? recipient.firstName : creator.firstName;
  };

  return (
    <>
      {showModal && <CreateConversationModal setShowModal={setShowModal} />}
      <StyledConversationSidebar>
        <ConversationSidebarHeader>
          <h3>Sidebar Header</h3>
          <div onClick={toggleModal}>
            <FiEdit size={32} />
          </div>
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
                  {getDisplayUser(conversation)}
                </ConversationSidebarItemName>
                <ConversationSidebarItemMessage>
                  {/* {conversation.lastMessage} */}
                </ConversationSidebarItemMessage>
              </div>
            </ConversationSidebarItem>
          ))}
        </ConversationSidebarContainer>
      </StyledConversationSidebar>
    </>
  );
};

export default ConversationSidebar;
