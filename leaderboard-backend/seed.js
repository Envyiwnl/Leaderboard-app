require("dotenv").config();
const mongoose = require("mongoose");
const User = require("./models/User");

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "leaderboard",
    });
    console.log("Connected to MongoDB Atlas");

    // Clear out any existing users
    await User.deleteMany({});

    // Ten seed names
    const names = [
      "Rahul",
      "Kamal",
      "Sanak",
      "Jagdish",
      "Anil",
      "Ramesh",
      "Suresh",
      "Deepak",
      "Neha",
      "Amit",
    ];

    const docs = names.map((name) => ({ name, totalPoints: 0 }));
    await User.insertMany(docs);

    console.log(`Seeded ${names.length} users.`);
    process.exit(0);
  } catch (err) {
    console.error("Seed error:", err);
    process.exit(1);
  }
}

seed();
