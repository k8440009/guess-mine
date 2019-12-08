/*******************************
 * 알림
 *******************************/
const notifications = document.getElementById("jsNotifications");
// 색깔로 알려준다.
const fireNotification = (text, color) => {
  const notification = document.createElement("div");
  notification.innerText = text;
  notification.style.backgroundColor = color;
  notifications.appendChild(notification);
};
// 새로운 유저가 오면 알려준다.
export const handleNewUser = ({ nickname }) =>
  fireNotification(`${nickname} just joined!`, "rgb(0, 122, 255)");

export const handleDisconnected = ({ nickname }) =>
  fireNotification(`${nickname} just lefted!`, "rgb(255, 149, 0)");
