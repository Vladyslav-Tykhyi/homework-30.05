import Description from "./Description";
import Options from "./Options";
import Feedback from "./feedback";

import { useState, useEffect } from "react";

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const savedData = localStorage.getItem("data");
    return savedData ? JSON.parse(savedData) : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(feedback));
  }, [feedback]);

  const resetBTN = () => {
    const cleared = { good: 0, neutral: 0, bad: 0 };
    setFeedback(cleared);
    localStorage.setItem("data", JSON.stringify(cleared));
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const updateFeedback = (feedbackType) => {
    setFeedback((prev) => {
      const updated = {
        ...prev,
        [feedbackType]: prev[feedbackType] + 1,
      };
      localStorage.setItem("data", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <div>
      <Description />
      <Options
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
        updateFeedback={updateFeedback}
        resetBTN={resetBTN}
        totalFeedback={totalFeedback}
      />
      <Feedback
        updateFeedback={updateFeedback}
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
        resetBTN={resetBTN}
        totalFeedback={totalFeedback}
      />
    </div>
  );
};

export default App;
