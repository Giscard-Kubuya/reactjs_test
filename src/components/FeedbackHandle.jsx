import FeedbackStats from "./FeedbackStats";
import FeedbackList from "./FeedbackList";
import FeedbackForm from "./FeedbackForm";
import { useState } from "react";
import FeedbackData from "../data/FeedbackData";
import { v4 as uuidv4 } from "uuid";
import AboutIconLink from "./AboutIconLink";

const FeedbackHandle = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure to delete this item?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeddback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <div>
      <FeedbackForm handleFeddback={addFeddback} />
      <FeedbackStats feedback={feedback} />
      <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      <AboutIconLink />
    </div>
  );
};

export default FeedbackHandle;
