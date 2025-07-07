# 📝 QuickTasks — A Minimal MERN Task Manager

QuickTasks is a simple full-stack task management app built to demonstrate how React (Vite + JSX + Tailwind CSS) connects with a Node.js + Express + MongoDB backend using Axios.  
This project is designed for beginners looking to understand fullstack web development using the MERN stack.

---

## 🚀 Tech Stack

| Layer      | Technology                                 |
|------------|--------------------------------------------|
| Frontend   | React (Vite), JSX, Tailwind CSS            |
| State      | useState, useEffect                        |
| API Client | Axios                                      |
| Backend    | Node.js, Express.js                        |
| Database   | MongoDB + Mongoose                         |
| Styling    | Tailwind CSS                               |

---

## ✨ Features

✅ Add new tasks  
✅ Toggle complete/incomplete  
✅ Delete tasks  
✅ Responsive UI with Tailwind  
✅ Full CRUD REST API  
✅ Seamless frontend-backend integration via Axios  

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repo

```bash
git clone https://github.com/Ronald-Wesh/QuickTasks.git
cd QuickTasks
2️⃣ Setup the backend
bash
Copy
Edit
cd server
pnpm install
cp .env.example .env
# Edit your MongoDB URI in .env
pnpm start
Make sure MongoDB is running locally or remotely.

3️⃣ Setup the frontend
bash
Copy
Edit
cd ../client
pnpm install
pnpm run dev
🌐 API Endpoints
Method	Endpoint	Description
GET	/api/tasks	Fetch all tasks
POST	/api/tasks	Create a new task
PUT	/api/tasks/:id	Update a task
DELETE	/api/tasks/:id	Delete a task

🧠 What You'll Learn
Setting up Vite with Tailwind CSS

Building reusable React components with props

Managing React state with hooks

Organizing an Express backend with routes/controllers/models

Connecting frontend and backend with Axios

Working with MongoDB via Mongoose
