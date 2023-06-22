// Import our custom CSS
import '../scss/styles.scss';
import { createTodo, getTodos, deleteTodo } from './api';
import * as bootstrap from 'bootstrap';

// Import all of Bootstrap's JS

window.handleHello = () => {
  axios.get('https://jsonplaceholder.typicode.com/todos/1').then((res) => {
    console.log(res.data);
  });
};

const todoList = document.getElementById('todo-list');

const handleGetTodos = async () => {
  const todos = await getTodos();
  todoList.innerHTML = '';
  todos.forEach((todo) => {
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.innerHTML = `
    <div class="d-flex justify-content-between align-items-center mb-2" id="${todo._id}">
      <span>${todo.title}</span>
      <button class="btn btn-danger" onclick="handleDeleteTodo('${todo._id}')">Delete</button>
    </div>
  `;
    todoList.appendChild(li);
  });
};

const handleCreateTodo = () => {
  const titleInput = document.getElementById('todo-title');
  const descriptionInput = document.getElementById('todo-description');
  console.log(titleInput.value, descriptionInput.value);
  createTodo(titleInput.value, descriptionInput.value).then((todo) => {
    handleGetTodos();
    titleInput.value = '';
    descriptionInput.value = '';
  });
};

const handleDeleteTodo = async (id) => {
  await deleteTodo(id);
  handleGetTodos()
}
// Fetch all todos and render them to the DOM first time render
handleGetTodos();
window.handleCreateTodo = handleCreateTodo;
window.handleDeleteTodo = handleDeleteTodo;
