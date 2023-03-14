import './styles/reset.css'
import './styles/style.css'
import UserInterface from './modules/userInterface.ts'
import LocalStorage from './modules/localStorage'

const moc = [{
  "text": "localstorage",
  "isCompleted": "false",
  "index": "1"
}]


document
  .querySelector('.createTodo_icon')
  .addEventListener('click', () => {
    UserInterface.addTodo()
  });

  document
  .addEventListener('DOMContentLoaded', () => {
  UserInterface.getTodos();
});