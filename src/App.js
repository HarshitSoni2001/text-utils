import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/Textform';

function App() {
  const[mode,setMode] =useState('light'); //wheather dark mode is enabled or not
  const[alert,setAlert] =useState(null);

  const showAlert=(messege,type)=>{
    setAlert({
      msg:messege,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode=()=>{
    if(mode==='light'){
        setMode('dark');
        document.body.style.backgroundColor='#042743'
        showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert("light mode is enabled","success")
    }
  }
  return (
    <>
  
      <Navbar title="Harshit" about="About" mode={mode} toggleMode={toggleMode}/>
      <Alert Alert={alert}/>  
      <div className="container my-3">
      <TextForm showAlert={showAlert} heading="Enter the text to analyse" mode={mode}/> 
      </div>
    </>
  );
}

export default App;
