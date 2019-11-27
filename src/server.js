import { join } from "path";
import express from "express";
import socketIO from "socket.io";

const PORT = 4000;
const app = express();
app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(express.static(join(__dirname, "static")));
app.get("/", (req, res) => res.render("home"));

const handleListening = () =>
  console.log(`✅ Server running: http://localhost:${PORT}`);

// app.listen(PORT, handleListening);

// HTTP 서버위에 socketIO 서버를 올린다.
const server = app.listen(PORT, handleListening);
const io = socketIO(server);
