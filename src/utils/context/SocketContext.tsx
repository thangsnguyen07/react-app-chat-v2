import { createContext } from "react";
import { io } from "socket.io-client";

export const socket = io(process.env.REACT_APP_WEBSOCKET_URL as string);
export const SocketContext = createContext(socket);

interface Props {
  children?: React.ReactNode;
}

const SocketProvider = ({ children }: Props) => {
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export default SocketProvider;
