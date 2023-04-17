import LocalStorage from "./localStorage";
import { todo } from "../types";
import { getFlag, changeFlag } from "./sortModule";

class UserInterface {
  static getTodos(sortFlag?: string) {
    const todosList = document.getElementById("todosList")!;
    todosList.innerHTML = "";
    const todolist = LocalStorage.getTodoList(sortFlag);
    todolist.forEach((todo) => UserInterface.showTodo(todo));
  }

  static showTodo(todo: todo) {
    const text = <HTMLInputElement>(
      document.querySelector(".createTodo__input")!
    );
    const todosList = document.getElementById("todosList")!;
    const newTodo = document.createElement("li");
    newTodo.classList.add("todo");

    const delIcon = document.createElement("div");
    const completedIcon = document.createElement("div");
    const notCompletedIcon = document.createElement("div");

    completedIcon.addEventListener("click", () => {
      this.changeStatus(todo);
    });

    notCompletedIcon.addEventListener("click", () => {
      this.changeStatus(todo);
    });

    delIcon.addEventListener("click", () => {
      this.removeTodo(todo);
    });

    delIcon.innerHTML =
      '<div class="todo__deleteIcon"><img src="https://raw.githubusercontent.com/navzlet/todo/main/src/img/ant-design_delete-outlined.png"></div>';
    completedIcon.innerHTML =
      '<div class="todo__completedIcon"><img src="https://raw.githubusercontent.com/navzlet/todo/main/src/img/completed.png"></div>';
    notCompletedIcon.innerHTML =
      '<div class="todo__completedIcon"><img src="https://raw.githubusercontent.com/navzlet/todo/main/src/img/akar-icons_circle.png"></div>';
    newTodo.innerHTML = `<div class="todo__text">${todo.text}</div>
      `;

    newTodo.insertBefore(
      todo.isCompleted ? completedIcon : notCompletedIcon,
      newTodo.firstChild
    );
    newTodo.append(delIcon);
    todosList.appendChild(newTodo);

    text.value = "";
  }

  static addTodo() {
    const text = <HTMLInputElement>(
      document.querySelector(".createTodo__input")!
    );
    if (text.value.trim() !== "") {
      const todo = {
        index: LocalStorage.getIndex(),
        isCompleted: false,
        text: text.value,
      };
      LocalStorage.addTodo(todo);
      UserInterface.getTodos("all");
    } else alert("Text needed");
  }

  static removeTodo(todo: todo) {
    LocalStorage.removeTodo(todo.index);
    this.getTodos("all");
  }

  static changeStatus(todo: todo) {
    LocalStorage.changeStatus(todo.index);
    this.getTodos("all");
  }
}

export default UserInterface;
