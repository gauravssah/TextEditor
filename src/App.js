import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Formbox from './components/Formbox';
import About from './components/About';
import React, { useState } from 'react'
import Alerts from './components/Alerts';


function App() {

  const [mode, setMode] = useState("light");

  const [alert, setAlerts] = useState(null);

  let showAlerts = (message, type) => {
    setAlerts({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlerts(null)
    }, 1500);
  }

  let togglemode = () => {
    if (mode == "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlerts("Dark Mode Enabled", "success");

    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlerts("Light Mode Enabled", "success")
    }
  }






  return (
    <>
      <Navbar title="TextEditor" aboutEditor="About Us" mode={mode} togglemode={togglemode} />
      <Alerts alert={alert} />

      <div className="container my-3">
        <Formbox heading="Enter Your Text below " mode={mode} showAlerts={showAlerts} />

        {/* <About /> */}
      </div>




    </>
  );
}

export default App;  
