import React from 'react';

import Header from './components/Header';
import './index.css';
import RoutePages from './components/routes/RoutePages';




function App() {
  

  return (
    <>
    <Header title="Hey guy" />
      <div className='container'>
        <RoutePages/>
      </div>
    </>


  );
}

export default App;
