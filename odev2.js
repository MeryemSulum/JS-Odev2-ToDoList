let listDOM = document.getElementById("list");
listDOM.addEventListener("click",(e) => e.target.classList.toggle("checked"));
const idTask = document.getElementById("task")

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

const addItem = (idTask) => {
  let liDOM = document.createElement("li");
  liDOM.innerHTML = idTask;
  listDOM.append(liDOM);
  addCloseIcon(liDOM);
}

let myNodeList = document.getElementsByTagName("li");
for(let i=0; i < myNodeList.length; i++){
  addCloseIcon(myNodeList[i]);
}

function addCloseIcon(element){ 
  let btn = document.createElement("button");
  btn.type = "button";
  btn.className = "close-icon close";
  btn.addEventListener("click",(e) => e.target.parentElement.parentElement.remove());
  btn.innerHTML = `<span aria-hidden="true">&times<span/>`;
  element.appendChild(btn);
}

function toastShow(className){
  $(document).ready($(className).toast("show"));
}

function newElement(){
  let txt = String(idTask.value);
  if(txt){
    addItem(txt);
    itemsArray.push(String(idTask.value));
    localStorage.setItem('items', JSON.stringify(itemsArray));
    idTask.value = "";
    toastShow(".success");
  } else {
    toastShow(".error");
    idTask.value =  "";
  }
}
data.forEach(item => {
  newElement(item);
});