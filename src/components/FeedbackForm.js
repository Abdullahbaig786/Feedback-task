import React, { useState } from "react";

const FeedbackForm = ({ onSubmit }) => {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(feedback);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Feedback:
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FeedbackForm;
