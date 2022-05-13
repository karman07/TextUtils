import logo from './logo.svg';
import './App.css';
import Navbar from './componenets/Navbar';
import TextForm from './componenets/TextForm';
import About from './componenets/About';
import React,{useState} from 'react';
import Alert from './componenets/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Routes,
//   Link
// } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message, type)=>{
    setalert({
      msg:message,
      type:type
    })

    setTimeout(() => {
      setalert(null);
    }, 2000);
  }
  const toggleMode =()=>{
    if(Mode === 'light'){
      setMode('dark')
      document.body.style.background = '#042743'
      showAlert("Dark mode has been enabled", "success")
      document.title = "TextUtils - Dark Mode"
    }else{
      setMode('light')
      document.body.style.background = 'white'
      showAlert("Light mode has been enabled", "success")
      document.title = "TextUtils - Light Mode"
    }
  }
  
  return (
    <>
    {/* <Router> */}
    <Navbar title="Text Utils" mode={Mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <Routes> */}
    <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode = {Mode}/>
    {/* </Routes> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
