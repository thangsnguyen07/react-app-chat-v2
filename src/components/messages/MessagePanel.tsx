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
  return (
    <StyledMessagePanel>
      <MessagePanelHeader />
      <MessagePanelBody>
        <MessageContainer messages={messages} />
        <MessageInputField />
      </MessagePanelBody>
    </StyledMessagePanel>
  );
};

export default MessagePanel;
