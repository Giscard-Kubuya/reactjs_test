import React from 'react';
import {v4 as uuidv4} from 'uuid';
import Header from './components/Header';
import FeedbackStats from './components/FeedbackStats';
import FeedbackList from './components/FeedbackList';
import FeedbackForm from './components/FeedbackForm';
import './index.css';
import { useState } from 'react';
import FeedbackData from './data/FeedbackData'




function App() {
  const [feedback,setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) =>{
    if(window.confirm('Are you sure to delete this item?')){
      setFeedback(feedback.filter((item)=>item.id!==id));
    }
  }

  const addFeddback = (newFeedback)=>{
    newFeedback.id = uuidv4();
    setFeedback([newFeedback,... feedback])
  }

  return (
    <React.Fragment>
      <Header title="Hey guy" />
      <div className='container'>
        <FeedbackForm handleFeddback={addFeddback}/>
        <FeedbackStats feedback={feedback}/>
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
      </div>

    </React.Fragment>
  );
}

export default App;
