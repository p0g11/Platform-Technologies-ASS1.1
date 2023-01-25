function addItem() {
var newItem = prompt("Enter Info:");

var list = document.getElementById ("info");
var newLi = document.createElement("li");
newLi.innerHTML = newItem;
list.appendChild(newLi);
}
