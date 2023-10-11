let message = document.getElementById("message");

let messageOnline = () => {
  message.textContent = "Internet Connected";
  message.style.cssText = "background-color: #e7f6d5; color: #689f38";
};
let messageOffline = () => {
  message.textContent = "No Internet Connection";
  message.style.cssText = "background-color: #808080; color: #d32f2f";
};

if (window.navigator.onLine) {
  messageOnline();
} else {
  messageOffline();
}

window.addEventListener("online", messageOnline);
window.addEventListener("offline", messageOffline);
