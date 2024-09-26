# Full-Stack Application Repository

## Table of Contents

1. [Overview](#overview)
2. [Basic Todo App](#basic-todo-app)
3. [Authentication App](#authentication-app)
4. [Blog App](#blog-app)
5. [Backend Concepts](#backend-concepts)
   - [Express.js](#expressjs)
   - [Node.js](#nodejs)
   - [MongoDB](#mongodb)
6. [Installation](#installation)
7. [Usage](#usage)
8. [Folder Structure](#folder-structure)
9. [Contributing](#contributing)
10. [License](#license)

---

## Overview

This repository contains several full-stack applications showcasing essential concepts in web development. The repository includes:

- A Basic Todo App
- An Authentication (Auth) App
- A Blog App
- Backend concepts like Node.js, Express.js, and MongoDB

Each app is designed to help you understand various aspects of web development using the MERN (MongoDB, Express.js, React.js, Node.js) stack.

---

## Basic Todo App

The Basic Todo App is a simple, full-stack application that allows users to:

- Add tasks
- Mark tasks as complete
- Delete tasks

This app demonstrates fundamental CRUD (Create, Read, Update, Delete) operations using Express.js and MongoDB on the backend and a minimalistic frontend interface built with basic HTML, CSS, and JavaScript.

---

## Authentication App

The Authentication App introduces user authentication concepts, including:

- User registration
- Login/Logout
- Password encryption using bcrypt
- JWT-based authentication for protected routes

This app demonstrates how to handle secure user authentication and session management in a full-stack application, ensuring user data is protected using industry-standard practices.

---

## Blog App

The Blog App is a basic CMS (Content Management System) that allows users to:

- Create blog posts
- Edit and delete posts
- View all posts

This app demonstrates how to build a more complex CRUD system with user-specific permissions and data management using Node.js, Express.js, and MongoDB as the backend.

---

## Backend Concepts

### Express.js

Express.js is used in all apps to handle backend server logic. It provides an easy-to-use, flexible web framework for building robust APIs and handling HTTP requests.

Key features of Express.js in this repository include:

- Middleware for request handling
- RESTful API routes
- Error handling

### Node.js

Node.js serves as the runtime environment for executing JavaScript on the server-side. It allows for non-blocking I/O operations, making it suitable for handling a large number of concurrent requests.

Node.js is used in all backend components for:

- API routes
- Real-time server-side logic
- File handling

### MongoDB

MongoDB is a NoSQL database that stores the application data for the Todo, Auth, and Blog apps. It allows for flexible schema design and scalability.

In this repository, MongoDB is used to:

- Store user data (for the Authentication app)
- Manage task lists (for the Todo app)
- Store blog posts (for the Blog app)

Mongoose, an ORM for MongoDB, is used to define models and interact with the database.

---

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/sername/repo-name.git
    cd repo-name
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    - Create a `.env` file in the root of the project.
    - Add the following variables:
        ```bash
        MONGO_URI=your-mongodb-connection-string
        JWT_SECRET=your-jwt-secret
        ```

4. Start the server:
    ```bash
    npm start
    ```

---

## Usage

- Visit the Todo app at `/todo`
- Visit the Auth app at `/auth`
- Visit the Blog app at `/blog`

You can perform basic CRUD operations in each app, such as adding new tasks, registering users, creating blog posts, and more.

---

## Folder Structure

```bash
|-- /todo-app
    |-- /models
    |-- /routes
    |-- /controllers
|-- /auth-app
    |-- /models
    |-- /routes
    |-- /controllers
|-- /blog-app
    |-- /models
    |-- /routes
    |-- /controllers
|-- /config
|-- /middleware
|-- server.js
|-- package.json
