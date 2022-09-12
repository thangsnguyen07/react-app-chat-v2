import { StyledConversationSidebar } from "../../styled/shared";
import { MdPostAdd } from "react-icons/md";

const ConversationSidebar = () => {
  return (
    <StyledConversationSidebar>
      <header>
        <h3>Sidebar Header</h3>
        <MdPostAdd size={32} />
      </header>
    </StyledConversationSidebar>
  );
};

export default ConversationSidebar;
