import React from 'react';

import './App.css'

import Button from './Calculator/Button';
import ToDolist from './Todoist/ToDolist';





function App() {
  
  return (
    <div className="App">
       <div className='calc'>
        <Button />    
      </div>
      <ToDolist/>
     
    </div>
  );
}

export default App;
