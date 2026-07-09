# Task Management Web Application

A modern full-stack task management application built using **React.js**, **Node.js**, **Express.js**, and **MongoDB**. The application enables users to create, organize, manage, and track daily tasks through a clean, responsive interface with RESTful API integration and persistent database storage.

---

##  Live Demo

https://task-management-application-rushi.vercel.app/

---

##  Overview

Task Management Web Application is a full-stack productivity application developed using the MERN stack. It allows users to efficiently organize their daily tasks with features such as task creation, editing, completion tracking, and deletion. The application follows a modular architecture, ensuring scalability, maintainability, and a seamless user experience across desktop and mobile devices.

---

##  Features

- Create new tasks
- View all tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as completed or pending
- Real-time task updates
- Dashboard with task statistics
  - Total Tasks
  - Completed Tasks
  - Pending Tasks
- Responsive and mobile-friendly UI
- RESTful API integration
- MongoDB database integration
- Modern UI built with Tailwind CSS
- Persistent data storage

---

##  Technologies Used

### Frontend

- React.js
- JavaScript (ES6+)
- Tailwind CSS
- Vite
- Fetch API

### Backend

- Node.js
- Express.js

### Database

- MongoDB
- Mongoose

### Development Tools

- Git
- GitHub
- VS Code
- MongoDB Atlas
- Render
- Vercel

---

##  Project Structure

```text
Task-Management-App/
│
├── backend/
│   ├── config/
│   │   └── database.js
│   │
│   ├── controllers/
│   │   └── todoItemsController.js
│   │
│   ├── models/
│   │   └── TodoItem.js
│   │
│   ├── routes/
│   │   └── todoItemsRouter.js
│   │
│   ├── app.js
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
├── README.md
└── package.json
```

---

##  Preview

![Task Management Preview](https://github.com/user-attachments/assets/19a17a75-1113-4911-915a-8b30d1d17d6a)

---

##  Getting Started

### Prerequisites

Before running this project, ensure you have installed:

- Node.js (v18 or above)
- npm
- MongoDB Atlas account

---

##  Installation

### Clone the Repository

```bash
git clone https://github.com/rushikesh-auti/Task-Management-App.git
```

Navigate to the project folder

```bash
cd Task-Management-App
```

---

### Backend Setup

Navigate to backend

```bash
cd backend
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Start backend server

```bash
npm start
```

---

### Frontend Setup

Open another terminal

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
VITE_API_URL=http://localhost:5000/api/todo
```

Start frontend

```bash
npm run dev
```

Open your browser

```
http://localhost:5173
```

---

##  API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/todo` | Retrieve all tasks |
| POST | `/api/todo` | Create a new task |
| PUT | `/api/todo/:id` | Update an existing task |
| PUT | `/api/todo/:id/completed` | Toggle task completion status |
| DELETE | `/api/todo/:id` | Delete a task |

---

##  Usage

- Add new daily tasks
- Edit task information
- Mark tasks as completed or pending
- Delete completed or unwanted tasks
- Track productivity using dashboard statistics
- Access the application on desktop, tablet, and mobile devices

---

##  Deployment

### Frontend

- Vercel

### Backend

- Render

### Database

- MongoDB Atlas

---

##  Future Enhancements

- User Authentication (JWT)
- User Accounts
- Task Categories
- Task Priority Levels
- Search Tasks
- Filter Tasks
- Due Date Sorting
- Drag & Drop Task Management
- Dark Mode
- Email Notifications
- Calendar View
- Progressive Web App (PWA)
- Docker Support
- Unit & Integration Testing
