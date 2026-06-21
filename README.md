# PropSpace

PropSpace is a full-stack web application that allows users to register, login, and manage property listings. Users can create, update, delete, and view properties in a secure and structured marketplace system.

---

## Project Overview

This project demonstrates a complete **MERN-style full-stack application** with:

- User authentication (JWT)
- Secure backend API (Node.js + Express)
- MongoDB database integration
- Full CRUD operations for property listings
- Protected routes and role-based ownership checks
- Modern React frontend (Vite + TypeScript)

---

## Tech Stack

### Frontend

- React + TypeScript
- Vite
- Axios
- Component-based architecture

### Backend

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- bcrypt password hashing

---

## Project Structure

PropSpace/
│
├── backend/
│ ├── src/
│ │ ├── config/
│ │ ├── controllers/
│ │ ├── models/
│ │ ├── routes/
│ │ ├── services/
│ │ ├── middleware/
│ │ └── index.ts
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── context/
│ │ ├── lib/
│ │ └── App.tsx
│
└── README.md

---

## Authentication System

- Users can register and login securely
- Passwords are hashed using bcrypt
- JWT tokens are used for session authentication
- Protected routes prevent unauthorized access

---

## Property Features (CRUD)

- Create new property listings
- View all properties (public access)
- Update own listings only
- Delete own listings only
- Each property includes:
  - Title
  - Description
  - Price
  - Location
  - Property type
  - Images

---

## API Endpoints

### Auth Routes

- POST `/api/auth/register`
- POST `/api/auth/login`

### Property Routes

- GET `/api/properties`
- POST `/api/properties`
- PUT `/api/properties/:id`
- DELETE `/api/properties/:id`

### User Routes

- GET `/api/user/profile`
- PUT `/api/user/profile`

---

## Environment Variables

### Backend (.env)

```env
PORT=5001
NODE_ENV=development
MONGODB_URI=mongodb://127.0.0.1:27017/propspace
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=7d
CORS_ORIGIN=http://localhost:5173

### How to Run the Project

1. Backend
cd backend
pnpm install
pnpm dev

2. Frontend
cd frontend
pnpm install
pnpm dev
