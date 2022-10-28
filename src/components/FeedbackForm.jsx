import Card from "./shared/Card";
import Button from "./shared/Button";
import { useState,useEffect } from "react";
import RatingSelect from "./RatingSelect";
import {useContext} from 'react';
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
  const {addFeddback,feedbackEdit,updateFeedback} = useContext(FeedbackContext);
  const [text, setText] = useState("");
  const [rating, setRating] = useState(1);
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const handleTextChange = (e) => {
    setText(e.target.value);
    if(e.target.value===''){
        setMessage(null)
        setIsBtnDisabled(true)
    }
    else if(e.target.value!=='' && e.target.value.length<=10){
        setMessage('Text must be at least 10 characters');
        setIsBtnDisabled(true)
    }
    else{
        setMessage(null)
        setIsBtnDisabled(false)
    }
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    const newFeedback = {
      text,rating
    }
    if(feedbackEdit.edit==true){
      updateFeedback(feedbackEdit.item.id,newFeedback);
    }
    else{
      addFeddback(newFeedback)
    }
  }

  useEffect(()=>{
    if(feedbackEdit.edit==true){
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
      setIsBtnDisabled(false);
    }
  },[feedbackEdit])
  
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <RatingSelect select={(rating)=>setRating(rating)}/>
        <h4>How would you rate your service with us?</h4>
        <div className="input-group">
          <input
            value={text}
            type="text"
            onChange={handleTextChange}
            placeholder="Write a review"
          />
          <Button type="submit" isDisabled={isBtnDisabled} version={"primary"}>
            Send
          </Button>
        </div>
      {message&& <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
