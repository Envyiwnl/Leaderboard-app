const express = require('express');
const router  = express.Router();
const User    = require('../models/User');
const Claim   = require('../models/Claim');

// POST /claim/:userId
router.post('/claim/:userId', async (req, res) => {
  const { userId } = req.params;
  const points     = Math.floor(Math.random() * 10) + 1;
  await new Claim({ user: userId, points }).save();
  const user = await User.findByIdAndUpdate(
    userId,
    { $inc: { totalPoints: points } },
    { new: true }
  );
  res.json({ user, points });
});

// GET /leaderboard
router.get('/leaderboard', async (req, res) => {
  const board = await User.find()
    .sort({ totalPoints: -1 })
    .lean();
  const ranked = board.map((u, i) => ({ ...u, rank: i + 1 }));
  res.json(ranked);
});

// GET /history/:userId
router.get('/history/:userId', async (req, res) => {
  const history = await Claim.find({ user: req.params.userId })
    .sort({ claimedAt: -1 });
  res.json(history);
});

module.exports = router;