let todolist = []

class LocalStorage {
  static getToDoLists() {
    if (localStorage.getItem('todolist') === null) {
      localStorage.setItem('todolist', JSON.stringify(todolist));
    } else {
      todolist = JSON.parse(localStorage.getItem('todolist'));
    }
    return todolist;
}
}