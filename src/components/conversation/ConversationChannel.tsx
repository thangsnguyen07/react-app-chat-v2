import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getConversationMessages } from "../../services/messages.service";
import { StyledConversationChannel } from "../../styled/conversation";
import { SOCKET } from "../../utils/constants";
import {
  AuthContext,
  AuthContextInterface,
} from "../../utils/context/AuthContext";
import { SocketContext } from "../../utils/context/SocketContext";
import { Message, MessageEventPayload } from "../../utils/interfaces";
import MessagePanel from "../messages/MessagePanel";

const ConversationChannel = () => {
  const { user } = useContext(AuthContext) as AuthContextInterface;
  const socket = useContext(SocketContext);
  const { id } = useParams();
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    getConversationMessages(parseInt(`${id}`))
      .then(({ data }) => {
        // console.log(data);
        setMessages(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    socket.on(SOCKET.CONNECTED, () => console.log("Socket Client Connected!"));
    // console.log(socket);
    socket.on(SOCKET.ON_MESSAGE, (payload: MessageEventPayload) => {
      const { conversation, ...message } = payload;
      console.log(message);
      setMessages((prev) => [message, ...prev]);
    });

    return () => {
      socket.off(SOCKET.CONNECTED);
      socket.off(SOCKET.ON_MESSAGE);
    };
  }, []);

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
