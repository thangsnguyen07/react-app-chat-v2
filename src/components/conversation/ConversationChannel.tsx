import { useContext } from "react";
import { StyledConversationChannel } from "../../styled/conversation";
import {
  AuthContext,
  AuthContextInterface,
} from "../../utils/context/AuthContext";

const ConversationChannel = () => {
  const { user } = useContext(AuthContext) as AuthContextInterface;
  return (
    <StyledConversationChannel>
      {user && user.firstName}
    </StyledConversationChannel>
  );
};

export default ConversationChannel;
