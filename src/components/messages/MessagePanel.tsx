import { useState } from "react";
import { useParams } from "react-router-dom";
import { sendMessage } from "../../services/messages.service";
import {
  MessagePanelBody,
  StyledMessagePanel,
} from "../../styled/conversation";
import { Message } from "../../utils/interfaces";
import MessageContainer from "./MessageContainer";
import MessageInputField from "./MessageInputField";
import MessagePanelHeader from "./MessagePanelHeader";

interface Props {
  messages: Message[];
}

const MessagePanel = ({ messages }: Props) => {
  const { id } = useParams();
  const [content, setContent] = useState<string>("");
  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!id || !content) return;

    try {
      await sendMessage({ content, conversationId: parseInt(id) });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StyledMessagePanel>
      <MessagePanelHeader />
      <MessagePanelBody>
        <MessageContainer messages={messages} />
        <MessageInputField
          content={content}
          setContent={setContent}
          onSubmit={handleSendMessage}
        />
      </MessagePanelBody>
    </StyledMessagePanel>
  );
};

export default MessagePanel;
