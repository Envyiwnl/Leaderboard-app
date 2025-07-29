**Leaderboard App**

A simple full‑stack application that lets you:

Select or add users

Claim random points (1–10) per user

View a real‑time leaderboard sorted by total points

Track each user’s claim history in MongoDB

**Tech Stack**

Backend: Node.js, Express, Mongoose, MongoDB Atlas

Frontend: React (Create‑React‑App), Axios, Tailwind CSS

Dev Tools: Nodemon (backend), PostCSS, Autoprefixer, React Refresh

**Prerequisites**

Node.js ≥ 16.x

npm ≥ 8.x

A MongoDB Atlas cluster (free tier is fine)

**Setup & Installation**

git clone https://github.com/Envyiwnl/Leaderboard-app.git

cd leaderboard-app

cd leaderboard-backend

npm install

cd leaderboard-frontend

npm install

**Configuration**

In backend/.env, set your Atlas URI:

MONGODB_URI=mongodb+srv://<user>:<pass>@cluster0.abcd.mongodb.net/leaderboard?retryWrites=true&w=majority

Ensure .env is git‑ignored (already in .gitignore).

**Database Seeding**

To initialize the first 10 users

cd leaderboard-backend

node seed.js

This will create a leaderboard database (auto‑created by MongoDB) with zero‑point users.

**Running the App**

# Start Backend

cd leaderboard-backend

npm run dev

# Start Frontend

cd leaderboard-frontend

npm start

**API Endpoints**

GET

/users

# List all users

POST

/users

# Create a new user (body: { name })

POST

/claim/:userId

# Award 1–10 random points to a user

GET

/leaderboard

# Get sorted & ranked list of users

GET

/history/:userId

# Get claim history for one user

