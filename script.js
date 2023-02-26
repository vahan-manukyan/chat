const chatMessages = document.getElementById("chat-messages");
const sendButton = document.getElementById("send-button");
const messageInput = document.getElementById("message-input");
let user = prompt("Type your name")

const sendMessage = () => {
  const message = messageInput.value.trim();
  if (!message) {
    return alert("chi karox linel datark");
  }

  const messageDiv = document.createElement("div")
  const messageText = document.createElement('p')
  const userconatiner = document.createElement('div')
  const username = document.createElement('p')
  const timeAndDate = document.createElement('p') 
  const date = new Date()

  const month = date.getMonth() + 1
  const day = date.getDate()
  const year = date.getFullYear()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const formattedDate = `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year} ${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`




  timeAndDate.innerText =  formattedDate
  username.innerText = user
  username.classList.add("username")
  timeAndDate.classList.add("username")
  messageDiv.classList.add("chat-message")
  userconatiner.classList.add("usercontainer")
  messageText.textContent = message
  messageDiv.append(userconatiner)
  messageDiv.append(messageText)
  chatMessages.appendChild(messageDiv);
  userconatiner.append(username)
  userconatiner.append(timeAndDate)
  messageInput.value = "";
  chatMessages.scrollTop = chatMessages.scrollHeight;
};

sendButton.addEventListener("click", sendMessage);
messageInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    sendMessage();
  }
})

