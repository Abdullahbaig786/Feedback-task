import React, { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import ThankYouMessage from "./components/Message";
import "../src/styles/tailwind.css";

const App = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (userName, feedback) => {
    try {
      const response = await fetch("http://localhost:3001/feedback/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: userName, feedback }),
      });

      if (response.ok) {
        console.log("Feedback submitted successfully");
        setSubmitted(true);
      } else {
        console.error("Failed to submit feedback");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md mx-auto p-6 bg-white border rounded-lg shadow-lg">
        {submitted ? (
          <ThankYouMessage />
        ) : (
          <FeedbackForm onSubmit={handleSubmit} />
        )}
      </div>
    </div>
  );
};

export default App;
