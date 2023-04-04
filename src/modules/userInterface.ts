import LocalStorage from "./localStorage";
import { todo } from "../types";

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
      '<div class="todo__deleteIcon"><img src="/src/img/ant-design_delete-outlined.png"></div>';
    completedIcon.innerHTML =
      '<div class="todo__completedIcon"><img src="/src/img/completed.png"></div>';
    notCompletedIcon.innerHTML =
      '<div class="todo__completedIcon"><img src="/src/img/akar-icons_circle.png"></div>';
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
      UserInterface.getTodos();
    } else alert("Text needed");
  }

  static removeTodo(todo: todo) {
    console.log(todo.index);
    LocalStorage.removeTodo(todo.index);
    this.getTodos();
  }

  static changeStatus(todo: todo) {
    console.log("completed");
    LocalStorage.changeStatus(todo.index);
    this.getTodos();
  }
}

export default UserInterface;
