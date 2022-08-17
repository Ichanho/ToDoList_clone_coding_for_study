const body = document.querySelector("body")
const userName = document.querySelector(".userName");

function handleUserName(event) {
  event.preventDefault();
  
  userName.style = "hidden";
  console.dir(userName);
}



userName.addEventListener("submit",handleUserName)
