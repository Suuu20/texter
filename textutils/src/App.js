
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const[mode, setMode]=useState('dark');
  const toogleMode=()=>{
    if(mode=='light'){
      setMode('dark')
    }
    else{
      setMode('light');
    }
  }
  return (
  <>
  
<Navbar/>
<Alert/>
<div className="container my-3">

<TextForm heading="Enter the Text to analyze"/>
<About/>
</div>

  </>
  );
}

export default App;
