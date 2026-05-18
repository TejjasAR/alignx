# AlignX

Enterprise Performance Management Platform built for modern organizations.

---

## 🚀 Overview

AlignX is a role-based performance management platform where employees can create goals, managers can review and approve them, and admins can monitor analytics and organizational performance.

The platform was designed with a modern enterprise workflow in mind using a sleek dark UI inspired by premium SaaS dashboards.

---

# ✨ Features

## 🔐 Authentication System

* Secure Login & Signup
* Role-based access control
* JWT Authentication
* Persistent sessions using Local Storage

---

## 👨‍💼 Employee Dashboard

* Create performance goals
* Set target, weightage, and UOM
* Update achievement progress
* Track goal completion status
* Progress bar visualization
* Goal validation rules

### Validation Rules

* Maximum 8 goals allowed
* Total weightage cannot exceed 100%
* Minimum goal weightage is 10%
* Negative targets are restricted

---

## 👔 Manager Dashboard

* Review employee goals
* Approve performance goals
* Track employee achievements
* Progress visualization
* Real-time approval updates

---

## 📊 Admin Dashboard

* Organizational analytics
* Goal statistics overview
* Pie chart visualization
* Approved vs Pending tracking
* Enterprise monitoring dashboard

---

# 🛠️ Tech Stack

## Frontend

* React.js
* Tailwind CSS
* Axios
* React Router DOM
* Recharts

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcrypt.js

## Deployment

* Frontend: Vercel
* Backend: Render
* Database: MongoDB Atlas

---

# 🎨 UI Design

The UI follows:

* Dark enterprise theme
* Atomberg-inspired premium aesthetics
* Modern glassmorphism styling
* Responsive layouts
* Minimal and sleek dashboard design

---

# 📂 Project Structure

```bash
alignx/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│
├── backend/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── server.js
│   └── .env
│
└── README.md
```

---

# ⚙️ Installation

## 1️⃣ Clone Repository

```bash
git clone https://github.com/TejjasAR/alignx.git
```

---

## 2️⃣ Install Frontend Dependencies

```bash
cd frontend
npm install
```

---

## 3️⃣ Install Backend Dependencies

```bash
cd backend
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file inside backend folder.

```env
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
PORT=5000
```

---

# ▶️ Run Project

## Start Backend

```bash
cd backend
npm start
```

---

## Start Frontend

```bash
cd frontend
npm run dev
```

---

# 🌐 Deployment

## Frontend

Deploy using:

* Vercel

## Backend

Deploy using:

* Render

## Database

Use:

* MongoDB Atlas

---

# 📸 Screenshots

Add screenshots of:

* Login Page
* Signup Page
* Employee Dashboard
* Manager Dashboard
* Admin Dashboard

---

# 🔥 Future Improvements

* Email notifications
* KPI scoring system
* Team performance insights
* PDF report generation
* AI-based performance analytics
* Notification system
* Goal deadline tracking
* Employee leaderboard

---

# 👨‍💻 Developed By

## Tejjas A R

Engineering Student | Full Stack Developer

GitHub:
[https://github.com/TejjasAR](https://github.com/TejjasAR)

---

# ⭐ If you liked this project

Give this repository a star on GitHub ⭐
