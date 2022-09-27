import { MessageInput, MessageInputContainer } from "../../styled/conversation";

interface Props {
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const MessageInputField = ({ content, setContent, onSubmit }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  return (
    <MessageInputContainer>
      <form onSubmit={onSubmit}>
        <MessageInput value={content} onChange={handleChange} />
      </form>
    </MessageInputContainer>
  );
};

export default MessageInputField;
