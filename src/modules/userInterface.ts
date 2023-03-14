import LocalStorage from "./localStorage";
import {todo} from '../types'

class UserInterface {
static getTodos(){
  const todosList = document.getElementById('todosList')!;
  todosList.innerHTML = ""
  const todolist = LocalStorage.getTodoList()
  todolist.forEach((item) => UserInterface.showTodo(item));
}

  static showTodo(todo: todo){
  const text = (<HTMLInputElement>document.querySelector('.createTodo__input')!)
  const todosList = document.getElementById('todosList')!;
  const newTodo = document.createElement('li')
    newTodo.classList.add('todo')
    newTodo.innerHTML = 
    `
    ${todo.isCompleted ?
      '<div class="todo__completedIcon"><img src="/src/img/completed.png"></div>'
      :
      '<div class="todo__completedIcon"><img src="/src/img/akar-icons_circle.png"></div>'}
      
      <div class="todo__text">${todo.text}</div>
      <div class="todo__deleteIcon"><img src="/src/img/ant-design_delete-outlined.png"></div>
      `
      todosList.appendChild(newTodo);
      text.value = ''
      console.log(todo)
  }

  static addTodo(){
    const text = (<HTMLInputElement>document.querySelector('.createTodo__input')!)
    if(text.value.trim() !== ""){
      const todo = {
        isCompleted: false,
        text: text.value,
      }
      LocalStorage.addTodo(todo)
      UserInterface.getTodos()
    } 
      else alert('Text needed')
  }

  static clearStorage(){
    LocalStorage.clearStorage()
  }
}

export default UserInterface