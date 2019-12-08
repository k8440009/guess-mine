import events from "./events";

const socketController = socket => {
  const broadcast = (event, data) => socket.broadcast.emit(event, data);
  // 접속
  socket.on(events.setNickname, ({ nickname }) => {
    socket.nickname = nickname;
    broadcast(events.newUser, { nickname });
  });
  // 종료
  socket.on(events.disconnect, () => {
    broadcast(events.disconnected, { nickname: socket.nickname });
  });
  /*
  // 클라이언트가 전송한 메세지 다른 클라이언트들에게 전달
  socket.on("newMessage", ({ message }) => {
    socket.broadcast.emit("messageNotifi", {
      message,
      nickname: socket.nickname || "Anonymous"
    });
  });
  */
};

export default socketController;
