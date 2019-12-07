import events from "./events";

const socketController = socket => {
  socket.on(events.setNickname, ({ nickname }) => {
    console.log(nickname);
    socket.nickname = nickname;
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
