````markdown
# Task Manager API

A simple RESTful API for managing tasks, built with JavaScript and Express.  
This service provides endpoints to create, fetch, filter, update, and delete tasks, with automatic sorting by creation date.

---

## 📌 Features

- Add new tasks  
- Retrieve all tasks  
- Filter by:
  - `completed` status  
  - `priority` (`low`, `medium`, `high`)  
- Sort tasks by `creationDate`  
- Fully update tasks (`PUT`)  
- Partially update tasks (`PATCH`)  
- Delete tasks  
- Lightweight backend using Node.js and Express  

---

## 📦 Dependencies

The project uses the following packages:

| Package     | Description |
|-------------|-------------|
| **express** | Web framework for building API routes |
| **nodemon** | Auto-restarts the server during development |
| **cors**    | Enables cross-origin requests |
| **morgan**  | Logs HTTP requests |
| **dotenv**  | Loads environment variables |

Install all dependencies:

```sh
npm install
```

---

## 🚀 API Endpoints

### **GET**

| Endpoint | Description |
|----------|-------------|
| **`/tasks`** | Get all tasks sorted by `creationDate` |
| **`/tasks?completed=true`** | Get completed tasks |
| **`/tasks?completed=false`** | Get incomplete tasks |
| **`/tasks/priority/:level`** | Get tasks by priority (`low`, `medium`, `high`) |
| **`/tasks/:id`** | Get a single task by its ID |

---

### **POST**

| Endpoint | Description |
|----------|-------------|
| **`/tasks`** | Create a new task |

---

### **PUT**

| Endpoint | Description |
|----------|-------------|
| **`/tasks/:id`** | Fully update an existing task |

---

### **PATCH**

| Endpoint | Description |
|----------|-------------|
| **`/tasks/:id`** | Partially update fields of an existing task |

---

### **DELETE**

| Endpoint | Description |
|----------|-------------|
| **`/tasks/:id`** | Delete a task |

---

## 🛠️ Running the Project Locally

### **1. Clone the repository**
```sh
git clone https://github.com/airtribe-projects/task-manager-api-Garvit-Rajpal.git
cd <project-folder>
```

### **2. Install dependencies**
```sh
npm install
```

---

## Starting the Server

### **Development mode** (with Nodemon auto-reload)
```sh
npm run dev
```

### **Production-like start**
```sh
npm start
```

The server runs on the port defined in `.env` or defaults to **3000**.

---

## 🧪 Run Tests
```sh
npm run test
```



 

````
