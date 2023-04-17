import UserInterface from "./userInterface";

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

export function changeBtnColor(button: Element) {
  sortAllBtn.classList.remove("sortel_active");
  sortCompletedBtn.classList.remove("sortel_active");
  sortActiveBtn.classList.remove("sortel_active");

  button.classList.add("sortel_active");
}

export function changeFlag(newFlag: string) {
  sortFlag = newFlag;
  UserInterface.getTodos(newFlag);
}

export function getFlag() {
  return sortFlag;
}
