import { Outlet } from "react-router-dom";
import ConversationSidebar from "../components/conversation/ConversationSidebar";
import { Page } from "../styled/shared";
import mockConversations from "../__mocks__/conversations";

const ConversationPage = () => {
  return (
    <Page>
      <ConversationSidebar conversations={mockConversations} />
      <Outlet />
    </Page>
  );
};

export default ConversationPage;
