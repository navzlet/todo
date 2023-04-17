import { todo, todoList } from "../types";

let todoList: todoList = [];

class LocalStorage {
  static getIndex() {
    if (localStorage.getItem("todoIndex") == null) {
      localStorage.setItem("todoIndex", "0");
      return 0;
    } else {
      let todoIndex = JSON.parse(localStorage.getItem("todoIndex")!) + 1;
      localStorage.setItem("todoIndex", JSON.stringify(todoIndex));
      return todoIndex;
    }
  }

  static getTodoList(sortFlag?: string) {
    if (localStorage.getItem("todoList") == null) {
      localStorage.setItem("todoList", JSON.stringify(todoList));
    } else {
      todoList = JSON.parse(localStorage.getItem("todoList")!);
    }
    switch (sortFlag) {
      case "completed": {
        return todoList.filter((todo) => todo.isCompleted === true);
      }
      case "active": {
        return todoList.filter((todo) => todo.isCompleted === false);
      }
      default: {
        return todoList;
      }
    }
  }

  static addTodo(todo: todo) {
    const todoList = LocalStorage.getTodoList();
    todoList.push(todo);
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }

  static removeTodo(todoIndex: number) {
    const todolist = LocalStorage.getTodoList();
    todolist.forEach((item, index) => {
      if (item.index === todoIndex) {
        todolist.splice(index, 1);
        localStorage.setItem("todoList", JSON.stringify(todolist));
      }
    });
  }

  static changeStatus(todoIndex: number) {
    const todoList = LocalStorage.getTodoList();
    for (let i = 0; i < todoList.length; i++) {
      if (todoList[i].index === +todoIndex) {
        todoList[i].isCompleted = !todoList[i].isCompleted;
        localStorage.setItem("todoList", JSON.stringify(todoList));
      }
    }
  }
}

export default LocalStorage;
