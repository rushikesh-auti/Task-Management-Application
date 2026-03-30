# Todo-List-App

A modern Todo List application built using ReactJS. This project demonstrates efficient state management using the React Context API and the useReducer hook. It allows users to manage daily tasks with due dates in a clean, responsive, and user-friendly interface.

## Overview

This application provides a simple and effective way to organize daily tasks. It follows a component-based architecture and uses centralized state management for better scalability and maintainability.

## Features

- Add new todo items with name and due date
- Delete existing todo items
- Real-time UI updates
- Responsive and clean interface using Bootstrap 5
- Centralized state management using Context API
- Efficient state handling with useReducer

## Technologies

- ReactJS
- JavaScript 
- Bootstrap 5
- React Context API
- useReducer Hook

## Project Structure

```
src/

├── components/
│   ├── AddTodo.jsx
│   ├── AppName.jsx
│   ├── AppName.module.css
│   ├── TodoItem.jsx
│   ├── TodoItems.module.css
│   ├── WelcomeMessage.jsx
│   └── WelcomeMessage.module.css

│
├── store/
│   └── todo-items-store.jsx
│
├── App.jsx
├── main.jsx
└── App.css
```

## Getting Started

### Prerequisites

- Node.js (v16 or above recommended)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
```

2. Navigate to the project directory

```bash
cd your-repo-name
```

3. Install dependencies

```bash
npm install
```

## Running the Application

Start the development server:

```bash
npm run dev
```

Open your browser and visit:

http://localhost:5173

## Usage

- Enter a todo name and select a due date
- Click the Add button to create a new todo
- Click the Delete button/icon to remove a todo item

## Future Enhancements

- Edit or update todo items
- Add task priority levels
- Implement dark mode
- Add notifications and reminders
- Enable drag-and-drop task management