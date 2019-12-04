import { join } from "path";
import express from "express";
import socketIO from "socket.io";
import logger from "morgan";

const PORT = 4000;
const app = express();
app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(logger("dev"));
app.use(express.static(join(__dirname, "static")));
app.get("/", (req, res) => res.render("home"));

const handleListening = () =>
  console.log(`✅ Server running: http://localhost:${PORT}`);

// app.listen(PORT, handleListening);

// HTTP 서버위에 socketIO 서버를 올린다.
const server = app.listen(PORT, handleListening);

const io = socketIO.listen(server);

let sockets = [];

// 연결
io.on("connection", socket => {
  // 클라이언트가 전송한 메세지 다른 클라이언트들에게 전달
  socket.on("newMessage", ({ message }) => {
    socket.broadcast.emit("messageNotifi", {
      message,
      nickname: socket.nickname || "Anonymous"
    });
  });
  // socket에 닉네임 저장
  socket.on("setNickname", ({ nickname }) => {
    socket.nickname = nickname;
  });
});
