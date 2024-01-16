// src/controllers/feedbackController.js
const Feedback = require("../models/feedbackModel");

const feedbackList = [];

const submitFeedback = (feedback) => {
  const newFeedback = new Feedback(Date.now(), feedback);
  feedbackList.push(newFeedback);
  return newFeedback;
};

const getFeedbackList = () => {
  return feedbackList;
};

module.exports = {
  submitFeedback,
  getFeedbackList,
};
