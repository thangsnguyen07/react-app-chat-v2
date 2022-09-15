import { Button } from "../../styled/buttons";
import {
  InputContainer,
  InputField,
  InputLabel,
  TextField,
} from "../../styled/form";

const CreateConversationForm = () => {
  return (
    <form>
      <InputContainer backgroundColor="lightDark" margin="0 0 10px 0">
        <InputLabel>Reciepent</InputLabel>
        <InputField />
      </InputContainer>
      <InputContainer backgroundColor="lightDark">
        <InputLabel>Message (optional)</InputLabel>
        <TextField />
      </InputContainer>
      <Button>Create conversation</Button>
    </form>
  );
};

export default CreateConversationForm;
