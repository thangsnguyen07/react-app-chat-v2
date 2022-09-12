import { Outlet } from "react-router-dom";
import ConversationSidebar from "../components/conversation/ConversationSidebar";
import { Page } from "../styled/shared";

const ConversationPage = () => {
  return (
    <Page>
      <ConversationSidebar />
      <Outlet />
    </Page>
  );
};

export default ConversationPage;
