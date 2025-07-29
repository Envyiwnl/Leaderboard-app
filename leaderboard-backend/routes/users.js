const express = require('express');
const router  = express.Router();
const User    = require('../models/User');

// GET /users
router.get('/', async (req, res) => {
  const users = await User.find().sort({ name: 1 });
  res.json(users);
});

// POST /users
router.post('/', async (req, res) => {
  const { name } = req.body;
  const user = new User({ name });
  await user.save();
  res.status(201).json(user);
});

module.exports = router;