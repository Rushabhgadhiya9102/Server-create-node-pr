# **Project Documentation: Server-router**

## **1. Overview**

*   **Project Name:** Server-router
*   **Description:** This project implements a basic Node.js HTTP server that serves different HTML files based on the requested URL paths. It acts as a simple router for a static website, displaying a home page, trips page, stories page, our team page, and a 404 error page for unhandled routes.
*   **Technologies Used:**
    *   Node.js
    *   HTML5
    *   CSS (Bootstrap 5.3.7)
    *   Bootstrap Icons

## **2. Project Structure**

The project directory `Server-router` contains the following key files and folders:

*   `.git/`: Git version control repository.
*   `404.html`: HTML file displayed for routes not found.
*   `index.html`: The main home page HTML file.
*   `ourteam.html`: HTML file for the "Our Team" page.
*   `README.md`: Project README file.
*   `server.js`: The core Node.js server application.
*   `stories.html`: HTML file for the "Stories" page.
*   `trips.html`: HTML file for the "Trips" page.

## **3. Installation and Setup**

### **3.1 Prerequisites**

*   Node.js installed on your system.

### **3.2 Steps**

1.  **Clone the repository (if applicable):**
    ```bash
    git clone <repository_url>
    cd Server-router
    ```
2.  **Install dependencies:**
    This project does not have explicit `npm` dependencies beyond Node.js itself, as it uses built-in modules (`http`, `fs`).

## **4. Usage**

### **4.1 Starting the Server**

To start the server, navigate to the project's root directory in your terminal and run:

```bash
node server.js
```

You should see the message: `Server is running on port 8083`.

### **4.2 Accessing the Application**

Once the server is running, you can access the different pages in your web browser:

*   **Home Page:** `http://localhost:8083/`
*   **Trips Page:** `http://localhost:8083/trips`
*   **Stories Page:** `http://localhost:8083/stories`
*   **Our Team Page:** `http://localhost:8083/ourteam`
*   **404 Not Found Page:** Any other unhandled URL, e.g., `http://localhost:8083/nonexistent`

## **5. Codebase Details**

### **5.1 `server.js`**

This file contains the Node.js HTTP server logic.

*   **`const http = require("http");`**: Imports the built-in Node.js `http` module for creating HTTP servers.
*   **`const fs = require('fs')`**: Imports the built-in Node.js `fs` (file system) module for reading files.
*   **`const PORT = 8083;`**: Defines the port on which the server will listen.
*   **`requestHandler(req, res)` function:**
    *   This function is executed for every incoming HTTP request.
    *   It uses a `switch` statement to determine the requested URL (`req.url`).
    *   Based on the URL, it sets the `filename` variable to the corresponding HTML file.
    *   If the URL does not match any defined cases, it defaults to `404.html`.
    *   **`fs.readFile(filename, (err, result) => { ... })`**: Asynchronously reads the content of the determined HTML file.
        *   If there is no error (`!err`), the file content (`result`) is sent as the HTTP response using `res.end(result)`. Error handling for `fs.readFile` is minimal in this example; in a production environment, more robust error handling would be necessary (e.g., sending a 500 Internal Server Error).
*   **`const server = http.createServer(requestHandler);`**: Creates an HTTP server instance, passing the `requestHandler` function to handle incoming requests.
*   **`server.listen(PORT, (error) => { ... });`**: Starts the server and makes it listen for incoming connections on the specified `PORT`.
    *   It includes a callback function to log a success message or an error if the server fails to start.

### **5.2 HTML Files (`index.html`, `trips.html`, `stories.html`, `ourteam.html`, `404.html`)**

These files are standard HTML5 documents.

*   They all include Bootstrap 5.3.7 CSS for styling.
*   `index.html` also includes Bootstrap Icons.
*   Each page has a common navigation bar that allows users to navigate between the different sections of the website.
*   The content within each HTML file is static and provides information relevant to its respective section (e.g., "ADVENTURE" on the home page, "Future Trips" on the trips page, "Our Stories" on the stories page, and "Our Team" on the our team page).
*   `404.html` provides a simple "404 Not Found" message.
