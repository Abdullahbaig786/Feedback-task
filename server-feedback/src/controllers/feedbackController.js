const Feedback = require("../models/feedbackModel");

const feedbackList = [];

const submitFeedback = (name, feedback) => {
  const newFeedback = new Feedback(Date.now(), name, feedback);
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
