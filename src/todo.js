const toDoForm = document.querySelector(".toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoShow = document.querySelector(".toDoShow");

const TODO_ITEM = "toDoItem"

let count = 1

/**몇번째 태그인지 Class 명을 통해 저장 후 li 추가 */
function showToDoList(number)
{
  let newToDo = document.createElement("li");
  newToDo.setAttribute("class", number);
  let newToDoText = document.createElement("span");
  newToDoText.innerText = localStorage.getItem(TODO_ITEM);
  let newToDoDelte = document.createElement("button");
  

  toDoShow.appendChild(newToDo);
}

/** */
function handleToDoForm(event)
{
  event.preventDefault();

  localStorage.setItem(TODO_ITEM, toDoInput.value);
  toDoInput.value = null;
  showToDoList(count);

  count +=1;
}


toDoForm.addEventListener("submit", handleToDoForm);