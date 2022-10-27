import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";
import {AnimatePresence,motion} from 'framer-motion'

const FeedbackList = ({ feedback,handleDelete }) => {
  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>;
  }
  return (
    <AnimatePresence>
      <div className="feedback-list">
        {feedback.map((item) => (
          <motion.div key={item.id} initial={{opacity:0}} animate={{opacity:4}} exit={{opacity:0}}>
            <FeedbackItem key={`${item.id}-${item.rating}`} handleDelete={handleDelete} item={item} />
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
FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default FeedbackList;
