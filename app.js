const item = document.querySelector("#item");
const toDoBox = document.querySelector("#to-do-box");

item.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    addToDo(this.value);
    this.value = "";
  }
});

const addToDo = (itemText) => {
  const listItem = document.createElement("li");
  listItem.textContent = itemText;

  const deleteIcon = document.createElement("i");
  deleteIcon.classList.add("fas", "fa-times");

  deleteIcon.addEventListener("click", function () {
    listItem.remove();
  });

  listItem.appendChild(deleteIcon);

  listItem.addEventListener("click", function () {
    this.classList.toggle("done");
  });

  toDoBox.appendChild(listItem);
};
