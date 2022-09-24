import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import ConversationSidebar from "../components/conversation/ConversationSidebar";
import { getConversations } from "../services/conversations";
import { Page } from "../styled/shared";
import { Conversation } from "../utils/interfaces";

const ConversationPage = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);

  useEffect(() => {
    getConversations()
      .then(({ data }) => setConversations(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Page>
      <ConversationSidebar conversations={conversations} />
      <Outlet />
    </Page>
  );
};

export default ConversationPage;
