var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var deleteButton = document.getElementsByClassName("delete");

for (var i = 0; i < deleteButton.length; i++) {
  deleteButton[i].addEventListener("click", removeListElement);
}

function inputLength() {
  return input.value.length;
}

function crossOutListElement(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("done");
  }
}

function createListElement() {
  //create list item with text first
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  li.innerHTML += " ";
  //create delete button after text
  var btn = document.createElement("button");
  btn.innerHTML = "Delete";
  btn.addEventListener("click", removeListElement);
  li.appendChild(btn);
  //add list item to unordered list
  ul.appendChild(li);
  //clear input form
  input.value = "";
}

function removeListElement(event) {
  event.target.removeEventListener("click", removeListElement);
  event.target.parentNode.remove();
}

function addListAfterClick() {
  if(inputLength() > 0) {
    createListElement();
  }
}

function addListAfterEnter(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

ul.addEventListener("click", crossOutListElement);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterEnter);

