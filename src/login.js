// Define string
const HIDDEN_CLASS = "hidden";
const GET_USER_NAME = "getUserName";

// Call html tag
const body = document.querySelector("body");
const getUserName = document.querySelector(".getUserName");
const userNameInput = document.querySelector(".getUserName input");
const helloUser = document.querySelector(".helloUser");
const helloSpan = document.querySelector(".helloUser span");
const changeName = document.querySelector(".changeName");

//로그인이 안되어있을 시 ToDo 안보이게
const toDoForm = document.querySelector(".toDoForm")

// 초기 저장된 username 확인
let saveUserName = localStorage.getItem(GET_USER_NAME);



function handleUserName(event) {
  event.preventDefault();
  
  getUserName.classList.add(HIDDEN_CLASS);
  localStorage.setItem(GET_USER_NAME, userNameInput.value);

  helloUser.classList.remove(HIDDEN_CLASS);
  toDoForm.classList.remove(HIDDEN_CLASS);
  saveUserName = localStorage.getItem(GET_USER_NAME);
  helloSpan.innerText=("Hellow "+saveUserName);
  // console.dir(userName);
}

function handelChangeName(event){
  toDoForm.classList.add(HIDDEN_CLASS);
  getUserName.classList.remove(HIDDEN_CLASS);
  helloUser.classList.add(HIDDEN_CLASS);
  localStorage.removeItem(GET_USER_NAME);
}

if(saveUserName != null)
{
  toDoForm.classList.remove(HIDDEN_CLASS);
  getUserName.classList.add(HIDDEN_CLASS);
  helloUser.classList.remove(HIDDEN_CLASS);
  helloSpan.innerText=("Hello "+saveUserName);
}

getUserName.addEventListener("submit",handleUserName);

changeName.addEventListener("click", handelChangeName);
