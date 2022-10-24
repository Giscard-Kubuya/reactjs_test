import React from 'react';
import Header from './components/Header';
import FeedbackStats from './components/FeedbackStats';
import FeedbackList from './components/FeedbackList';
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

  return (
    <React.Fragment>
      <Header title="Hey guy" />
      <div className='container'>
        <FeedbackStats feedback={feedback}/>
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
      </div>

    </React.Fragment>
  );
}

export default App;
