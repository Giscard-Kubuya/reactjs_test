import FeedbackStats from "./FeedbackStats";
import FeedbackList from "./FeedbackList";
import FeedbackForm from "./FeedbackForm";
import AboutIconLink from "./AboutIconLink";

const FeedbackHandle = () => {

  return (
    <div>
      <FeedbackForm />
      <FeedbackStats />
      <FeedbackList/>
      <AboutIconLink />
    </div>
  );
};

export default FeedbackHandle;
