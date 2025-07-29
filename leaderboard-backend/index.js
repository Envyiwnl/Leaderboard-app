require('dotenv').config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// getting users and leaderboard data
const userRoutes = require("./routes/users");
const leaderboardRoutes = require("./routes/leaderboard");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.set('strictQuery', false);

// Establishing Mongoose Connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName:'leaderboard',
  })
  .then(() => console.log("Connected to MongoDB atlas"))
  .catch((err) => console.error("Atlas connection error:", err));

// router Calls  
app.use('/users', userRoutes);

app.use('/', leaderboardRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
