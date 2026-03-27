# Copilot Instructions for This Repository

## Build, Test, and Lint Commands

- **Start server:**
  ```sh
  ./start-server.sh
  ```
  This runs a Python SimpleHTTPServer on port 1234 to serve static files.

- **No build, test, or lint commands** are defined in this frontend directory. There is no package.json or Makefile. All logic is in static JS/HTML files.

## High-Level Architecture

- **Static frontend:**
  - `index.html` is the main HTML file, containing UI elements for user input and displaying messages.
  - `main.js` handles all client-side logic. It listens for button clicks, reads the input, and sends a POST request to `http://localhost:3000/hello` with the user's name. The server's response is displayed in the UI.
  - There is no frontend framework or build step; all code is plain JavaScript and HTML.

- **Server dependency:**
  - The frontend expects a backend server running at `localhost:3000` with a `/hello` endpoint that accepts JSON `{ name: ... }` and returns `{ message: ... }`.

## Key Conventions

- All DOM element IDs referenced in JS are defined in `index.html`.
- All server communication uses fetch with JSON payloads.
- No module bundlers or transpilers are used; code is ES6+ and runs directly in browsers.

---

This file summarizes build/run steps, architecture, and conventions for Copilot and other AI tools. If you add tests, build tools, or new conventions, update this file.
