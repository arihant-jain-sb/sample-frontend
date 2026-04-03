// This is the location of our server, when it's running locally
const serverUrl = 'http://localhost:3000';

// Grab all the elements we will be dealing with

// Todo app elements
const newTodoTitle = document.querySelector('#new-todo-title');
const addTodoButton = document.querySelector('#add-todo-button');
const todoList = document.querySelector('#todo-list');

// --- Todo API Calls and UI Logic ---

// Fetch and render todos on page load
window.addEventListener('DOMContentLoaded', fetchAndRenderTodos);
addTodoButton.addEventListener('click', handleAddTodo);

todoList.addEventListener('click', handleTodoListClick);

async function fetchAndRenderTodos() {
  const res = await fetch(serverUrl + '/todos');
  const todos = await res.json();
  renderTodos(todos);
}

function renderTodos(todos) {
  todoList.innerHTML = '';
  todos.forEach(todo => {
    const li = document.createElement('li');
    li.dataset.id = todo.id;
    li.innerHTML = `
      <input type="checkbox" class="toggle-completed" ${todo.completed ? 'checked' : ''} />
      <span class="todo-title" style="color:${todo.completed ? 'green' : 'grey'}">${escapeHtml(todo.title)}</span>
      <button class="delete-todo">Delete</button>
    `;
    todoList.appendChild(li);
  });
}

async function handleAddTodo() {
  const title = newTodoTitle.value.trim();
  if (!title) return;
  const res = await fetch(serverUrl + '/todos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title })
  });
  if (res.ok) {
    newTodoTitle.value = '';
    fetchAndRenderTodos();
  }
}

async function handleTodoListClick(e) {
  const li = e.target.closest('li');
  if (!li) return;
  const id = li.dataset.id;
  if (e.target.classList.contains('delete-todo')) {
    await fetch(serverUrl + '/todos/' + id, { method: 'DELETE' });
    fetchAndRenderTodos();
  } else if (e.target.classList.contains('toggle-completed')) {
    const completed = e.target.checked;
    await fetch(serverUrl + '/todos/' + id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed })
    });
    fetchAndRenderTodos();
  }
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.innerText = text;
  return div.innerHTML;
}


// When the submit button is clicked, trigger the `sendRequest`
// function which is defined below
submitButton.addEventListener('click', sendRequest)


// sendRequest(): Triggered when the submit button is clicked
//
// This is an 'async' function, meaning it will wait for our
// server request to be fulfilled before it returns.
async function sendRequest() {
  // Capture the text entered in the name field
  const name = nameField.value;

  // Use the fetch() function to query our url at the route
  // '/hello'. The headers tell the API to expect a JSON
  // object, which is how we send our data in the body.
  //
  // The 'await' keyword tells the function to wait for this
  // to be fulfilled before moving on with the code
  const response = await fetch(serverUrl + '/hello', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({ name: name })
  });

  // Once we have requested from the server, wait for it
  // to finish sending us all the JSON data back. 
  const json = await response.json();

  // We get an object from the server that looks like
  // { message: 'Hello, [yourname]' }. Update the message area
  // with this text.
  const message = json.message;
  messageArea.innerText = message;
}