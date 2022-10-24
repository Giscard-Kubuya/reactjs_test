const FeedbackStats = (props) => {
    let avarage = props.feedback.reduce((acc,cur)=>{
        return acc+cur.rating;
    },0)/props.feedback.length;

    avarage = avarage.toFixed(1).replace(/[.,]0$/,'');
  return (
    <div className="feedback-stats">
        <h4>{props.feedback.length} Reviews</h4>
        <h4>Avarage rating: {isNaN(avarage)?0:avarage}</h4>
    </div>
  );
}

export default FeedbackStats;
