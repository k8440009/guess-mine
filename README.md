# guess-mine

Realtime Drawing Game built with SocketIO, Gulp and Node

## To Do :

- [x] Server
- [x] Pug
- [x] Static
- [x] ESLint
- [] SocketIO
  http://localhost:4000/socket.io/socket.io.js (참고)

## file

- server.js : 서버, index.js : 클라이언트

## SocketIO

- 서버 껏다 켜도 다시 연결 가능 : Socket은 항상 서버 이벤트를 듣고 있기 때문
  서버와 연결이 해제 되었다면 Socket은 계속 연결을 하려고 한다.
- emit : 이벤트 발생, 연결된 socket에 이벤트 전송
- broadcast : 방금 접속한 클라이언트를 제외한 모든 클라이언트들에게 메세지를 보낸다.
