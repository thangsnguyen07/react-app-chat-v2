import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getConversationMessages } from "../../services/messages.service";
import { StyledConversationChannel } from "../../styled/conversation";
import {
  AuthContext,
  AuthContextInterface,
} from "../../utils/context/AuthContext";
import { Message } from "../../utils/interfaces";
import MessagePanel from "../messages/MessagePanel";

const ConversationChannel = () => {
  const { user } = useContext(AuthContext) as AuthContextInterface;
  const { id } = useParams();
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    getConversationMessages(parseInt(id!))
      .then(({ data }) => {
        console.log(data);
        setMessages(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <StyledConversationChannel>
      {/* {messages.map((message) => (
        <div key={message.id}>{message.content}</div>
      ))} */}
      <MessagePanel messages={messages}></MessagePanel>
    </StyledConversationChannel>
  );
};

export default ConversationChannel;
