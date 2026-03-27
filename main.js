// This is the location of our server, when it's running locally
const serverUrl = 'http://localhost:3000';

// Grab all the elements we will be dealing with
const nameField = document.querySelector('#name-field');
const submitButton = document.querySelector('#submit-button');
const greetButton = document.querySelector('#greet-button');
const messageArea = document.querySelector('#message-area');


// When the submit button is clicked, trigger the `sendRequest`
// function which is defined below
submitButton.addEventListener('click', sendRequest)
greetButton.addEventListener('click', sendGreetRequest)


// sendRequest(): Triggered when the submit button is clicked
//
// This is an 'async' function, meaning it will wait for our
// server request to be fulfilled before it returns.
async function sendRequest() {
  const name = nameField.value;
  const response = await fetch(serverUrl + '/hello', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({ name: name })
  });
  const json = await response.json();
  const message = json.message;
  messageArea.innerText = message;
}

// sendGreetRequest(): Triggered when the greet button is clicked
async function sendGreetRequest() {
  const name = nameField.value;
  const response = await fetch(serverUrl + '/greet', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({ name: name })
  });
  const json = await response.json();
  const message = json.message;
  messageArea.innerText = message;
}
