import "./styles/reset.css";
import "./styles/style.css";
import UserInterface from "./modules/userInterface.ts";
import { changeBtnColor } from "./modules/sortModule";
const sortAllBtn = document.querySelector(".sort__allTodos");
document.querySelector(".createTodo_icon").addEventListener("click", () => {
  UserInterface.addTodo();
  changeBtnColor(sortAllBtn);
});

document.addEventListener("DOMContentLoaded", () => {
  UserInterface.getTodos("all");
});
