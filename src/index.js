import "./styles/reset.css";
import "./styles/style.css";
import UserInterface from "./modules/userInterface.ts";

const sortAllBtn = document.querySelector(".sort__allTodos");
const sortCompletedBtn = document.querySelector(".sort__completedTodos");
const sortActiveBtn = document.querySelector(".sort__activeTodos");

let sortFlag = "all";

sortAllBtn.addEventListener("click", () => {
  changeBtnColor(sortAllBtn);
  changeFlag("all");
});

sortCompletedBtn.addEventListener("click", () => {
  changeBtnColor(sortCompletedBtn);
  changeFlag("completed");
});

sortActiveBtn.addEventListener("click", () => {
  changeBtnColor(sortActiveBtn);
  changeFlag("active");
});

function changeBtnColor(button) {
  sortAllBtn.classList.remove("sortel_active");
  sortCompletedBtn.classList.remove("sortel_active");
  sortActiveBtn.classList.remove("sortel_active");

  button.classList.add("sortel_active");
}

function changeFlag(newFlag) {
  UserInterface.getTodos(newFlag);
}

document.querySelector(".createTodo_icon").addEventListener("click", () => {
  UserInterface.addTodo();
  changeBtnColor(sortAllBtn);
  changeFlag("all");
});

document.addEventListener("DOMContentLoaded", () => {
  UserInterface.getTodos(sortFlag);
});
