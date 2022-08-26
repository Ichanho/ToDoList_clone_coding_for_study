const toDoForm = document.querySelector(".toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoShow = document.querySelector(".toDoShow");


const TODO_KEY = "toDoItem"

let toDos = [];


function handleToDoDelete(event)
{
  const li = event.target.parentElement;
  const deleteID = parseInt(event.target.parentNode.id);

  function filteringItem(item){return item.id !== deleteID}

  const tempToDos = toDos.filter(filteringItem);
  toDos = tempToDos;
  saveToDo();

  li.remove();
}

/**각각 ID 부여 후 문자 출력, Delete 버튼 부여 */
function showToDoList(toDo)
{
  let newToDo = document.createElement("li");
  newToDo.setAttribute("id", toDo.id);
  let newToDoText = document.createElement("span");
  newToDoText.innerText = toDo.text;
  let newToDoDelete = document.createElement("button");
  newToDoDelete.innerText = "X";
  newToDoDelete.addEventListener("click",handleToDoDelete);

  newToDo.appendChild(newToDoText);
  newToDo.appendChild(newToDoDelete);
  toDoShow.appendChild(newToDo);
}

/**Save 'toDos' to localStorage */
function saveToDo(){
  const toDosString = JSON.stringify(toDos);
  localStorage.setItem(TODO_KEY, toDosString);
}

/** */
function handleToDoForm(event)
{
  event.preventDefault();

  const toDoObj = {
    id: Date.now(),
    text: toDoInput.value
  };
  toDoInput.value = null;

  toDos.push(toDoObj);
  showToDoList(toDoObj);
  saveToDo();
}

toDoForm.addEventListener("submit", handleToDoForm);


const savedToDo = localStorage.getItem(TODO_KEY);

function loadingToDo(iTem)
{
  toDos.push(iTem);
  showToDoList(iTem);
}

if(savedToDo){
  const parsedToDos = JSON.parse(savedToDo);
  parsedToDos.forEach(loadingToDo);
}