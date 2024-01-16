// src/routes/feedbackRoutes.js
const express = require("express");
const router = express.Router();
const feedbackController = require("../controllers/feedbackController");

router.post("/submit", (req, res) => {
  const { feedback } = req.body;
  const newFeedback = feedbackController.submitFeedback(feedback);
  res.json(newFeedback);
});

router.get("/list", (req, res) => {
  const feedbackList = feedbackController.getFeedbackList();
  res.json(feedbackList);
});

module.exports = router;
