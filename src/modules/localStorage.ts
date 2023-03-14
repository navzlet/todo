import { todo, todoList } from "../types";

let todoList: todoList = []

class LocalStorage {
  static getTodoList() {
    if(localStorage.getItem('todoList') == null){
      localStorage.setItem('todoList', JSON.stringify(todoList))
    }else {
      todoList = JSON.parse(localStorage.getItem('todoList')!);
    }
    return todoList;
  }

  static addTodo(todo: todo) {
    const todoList = LocalStorage.getTodoList();
    todoList.push(todo);
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }

  static removeTodo(todoIndex: number) {
    const todolists = LocalStorage.getTodoList();
    todolists.forEach((item, index) => {
      if (item.index === todoIndex) {
        todolists.splice(index, 1);
        localStorage.setItem('todolists', JSON.stringify(todolists));
      }
    });
}

  static updateStatus(index: number) {
    const todolists = LocalStorage.getTodoList();
    for (let i = 0; i < todolists.length; i++) {
      if (todolists[i].index === +index) {
        todolists[i].isCompleted = !todolists[i].isCompleted;
        localStorage.setItem('todolists', JSON.stringify(todolists));
      }
    }
  }
  // static taskComp(index) {
  //   const todolists = LocalStorage.getToDoLists();
  //   for (let i = 0; i < todolists.length; i += 1) {
  //     if (todolists[i].index === +index) {
  //       todolists[i].isCompleted = !todolists[i].isCompleted;
  //     }
  //   }
  //   localStorage.setItem('todolists', JSON.stringify(todolists));
  // }
  static clearStorage(){
    localStorage.clear()
  }
}

export default LocalStorage;