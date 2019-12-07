# guess-mine

Realtime Drawing Game built with SocketIO, Gulp and Node

## To Do :

- [x] Server
- [x] Pug
- [x] Static
- [x] ESLint
- [] Login
  [x] 1. save nickname
- [] SocketIO
  http://localhost:4000/socket.io/socket.io.js (참고)

## file

- server.js : 서버, index.js : 클라이언트

## SocketIO

- 서버 껏다 켜도 다시 연결 가능 : Socket은 항상 서버 이벤트를 듣고 있기 때문
  서버와 연결이 해제 되었다면 Socket은 계속 연결을 하려고 한다.
- emit : 이벤트 발생, 연결된 socket에 이벤트 전송
- broadcast : 방금 접속한 클라이언트를 제외한 모든 클라이언트들에게 메세지를 보낸다.

## Gulp

- https://riptutorial.com/gulp/topic/1341/getting-started-with-gulp
- https://www.npmjs.com/package/gulp
- https://www.npmjs.com/package/gulp-sass
- https://www.npmjs.com/package/gulp-autoprefixer : 웹 호환성 보완
- https://www.npmjs.com/package/gulp-csso : css 압축
- https://www.npmjs.com/package/del : 위치를 저장하여 그곳의 폴더 자동 삭제
- https://www.npmjs.com/package/gulp-browserify
- https://www.npmjs.com/package/babelify
