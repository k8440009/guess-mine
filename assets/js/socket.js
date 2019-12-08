/****************************
    subscription 관리
 *****************************/
import { handleNewUser, handleDisconnected } from "./notifications";

let socket = null;

export const getSocket = () => socket;

export const updateSocket = aSocket => (socket = aSocket);

// 모든 subscription 제어
export const initSockets = aSocket => {
  const { events } = window;
  updateSocket(aSocket);
  aSocket.on(events.newUser, handleNewUser);
  aSocket.on(events.disconnected, handleDisconnected);
};
