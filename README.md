# Todo App Frontend

This is a simple frontend for a Todo application. It connects to a backend API and allows you to manage your todo list in the browser.

## Features
- Add new todos
- Mark todos as completed
- Delete todos
- All changes are synced with the backend API

## Usage
1. Start the backend server (see backend README for instructions).
2. Start the frontend server:
   ```sh
   ./start-server.sh
   ```
3. Open [http://localhost:1234](http://localhost:1234) in your browser.

## UI Guide
- Enter a new todo in the input box and click "Add Todo" to create a todo.
- Each todo appears in the list with a custom-styled checkbox (with checkmark for completed) and a Delete button.
- Checking/unchecking the box updates the todo's completed status.
- Clicking Delete removes the todo.
- **Completed todos appear in high-contrast green with a checkmark icon, incomplete todos in high-contrast grey with an empty box icon.**

## Modern UI & Customization
- Uses a modern, sans-serif font and improved spacing for readability.
- The todo list container features a light background, rounded corners, and subtle box-shadows.
- Inputs and buttons are styled with padding, border-radius, and soft borders. Buttons have stylish hover effects.
- Todo items are spaced, have rounded corners, and a slight shadow for separation.
- Checkboxes are fully custom, visually appealing, and accessible.
- All styling is handled via a `<style>` block in `index.html`—no external frameworks required.
- Responsive design ensures usability on mobile and desktop.

## API Integration
The frontend communicates with the backend using the following endpoints:
- `GET /todos` — List all todos
- `POST /todos` — Create a new todo (expects `{ title: string }`)
- `PUT /todos/<id>` — Update a todo (expects `{ title?: string, completed?: boolean }`)
- `DELETE /todos/<id>` — Delete a todo

All requests and responses use JSON. The backend must have CORS enabled.

---

This project is for demonstration purposes. See `main.js` for implementation details.
