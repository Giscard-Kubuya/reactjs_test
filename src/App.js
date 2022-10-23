import React from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import './index.css';
import { useState } from 'react';
import FeedbackData from './data/FeedbackData'


function App() {
  const [feedback,setFeedback] = useState(FeedbackData);

  return (
    <React.Fragment>
      <Header title="Hey guy" />
      <div className='container'>
        <FeedbackList feedback={feedback}/>
      </div>

    </React.Fragment>
  );
}

export default App;
