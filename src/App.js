import React from 'react';

import Header from './components/Header';
import './index.css';
import RoutePages from './components/routes/RoutePages';
import {FeedbackProvider} from './context/FeedbackContext';



function App() {
  

  return (
    <FeedbackProvider>
    <Header title="Hey guy" />
      <div className='container'>
        <RoutePages/>
      </div>
    </FeedbackProvider>


  );
}

export default App;
