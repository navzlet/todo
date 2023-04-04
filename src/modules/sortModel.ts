import LocalStorage from "./localStorage";

export class SortModel {
  static allTasks() {
    return LocalStorage.getTodoList();
  }
  static completed() {
    console.log(LocalStorage.getTodoList());
  }
  static active() {}
}
