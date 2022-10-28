import FeedbackItem from "./FeedbackItem";
import { AnimatePresence, motion } from "framer-motion";
import FeedbackContext  from "../context/FeedbackContext";
import { useContext } from "react";

const FeedbackList = ({ handleDelete }) => {
  

  const { feedback } = useContext(FeedbackContext);
  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>;
  }
  return (
    <AnimatePresence>
      <div className="feedback-list">
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 4 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={`${item.id}-${item.rating}`}
              item={item}
            />
          </motion.div>
        ))}
      </div>
    </AnimatePresence>
  );

  // return (
  //   <div className="feedback-list">
  //     {feedback.map((item) => (
  //       <FeedbackItem key={`${item.id}-${item.rating}`} handleDelete={handleDelete} item={item} />
  //     ))}
  //   </div>
  // );
};


export default FeedbackList;
