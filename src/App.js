//import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Textform from './Textform';
import Alert from './Alert';
//import DarkandLight from './DarkandLight';
import React, { useState } from 'react'
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const[mode, setMode] = useState('light');
  const [btnText, setBtnText] = useState("Enable Darkmode")
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      setBtnText("Disable Darkmode");
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setBtnText("Enable Darkmode");
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
     <Navbar title="MagicNotes" about="About" mode={mode} toggleMode={toggleMode} btntext={btnText} />
     <Alert alert={alert}/>
    <div className="container my-3">
        {/* <DarkandLight /> */}
        <Textform showAlert={showAlert} heading="Notepad" mode={mode} />
    </div>
  {/* <BrowserRouter>
    <Navbar title="MagicNotes" about="About" mode={mode} toggleMode={toggleMode} btntext={btnText} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
        <Route path="/about" element={<DarkandLight />} />
        <Route path="/" element={<Textform showAlert={showAlert} heading="Notepad" mode={mode} />} />
    </Routes>
    </div>
    </BrowserRouter> */}
  
  </>
  );
}

export default App;
