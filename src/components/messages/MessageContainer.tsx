import { formatRelative } from "date-fns";
import { memo, useContext } from "react";
import {
  MessageItemAuthor,
  MessageItemAvatar,
  MessageItemContainer,
  MessageItemContent,
  MessageItemDetails,
  MessageItemHeader,
  MessageItemTime,
  StyledMessageContainer,
} from "../../styled/conversation";
import {
  AuthContext,
  AuthContextInterface,
} from "../../utils/context/AuthContext";
import { Message, User } from "../../utils/interfaces";

interface Props {
  messages: Message[];
}

interface FormattedMessageProps {
  user?: User;
  message: Message;
}

function FormattedMessage({ user, message }: FormattedMessageProps) {
  return (
    <MessageItemContainer key={message.id}>
      <MessageItemAvatar />
      <MessageItemDetails>
        <MessageItemHeader>
          <MessageItemAuthor
            style={{
              color: user?.id === message.author.id ? "orange" : "#13ddab",
            }}
          >
            {message.author.firstName} {message.author.lastName}
          </MessageItemAuthor>
          <MessageItemTime>
            {formatRelative(new Date(message.createdAt), new Date())}
          </MessageItemTime>
        </MessageItemHeader>
        <MessageItemContent>{message.content}</MessageItemContent>
      </MessageItemDetails>
    </MessageItemContainer>
  );
}

const MessageContainer = ({ messages }: Props) => {
  const { user } = useContext(AuthContext) as AuthContextInterface;

  console.log("render");

  const formatMessage = () => {
    return messages.map((message, index, arr) => {
      // console.log(index);
      const currentMessage = arr[index];
      const nextMessage = arr[index + 1];

      if (arr.length === index + 1) {
        // console.log("End of array");
        return (
          <FormattedMessage key={message.id} user={user} message={message} />
        );
      }

      if (currentMessage.author.id === nextMessage.author.id) {
        return (
          <MessageItemContainer key={message.id}>
            <MessageItemContent margin="0 0 0 65px">
              {message.content}
            </MessageItemContent>
          </MessageItemContainer>
        );
      } else {
        return (
          <FormattedMessage key={message.id} user={user} message={message} />
        );
      }
    });
  };

  return <StyledMessageContainer>{formatMessage()}</StyledMessageContainer>;
};

export default memo(MessageContainer);
