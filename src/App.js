import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Formbox from './components/Formbox';
import About from './components/About';
import React, { useState } from 'react'
import Alerts from './components/Alerts';


function App() {

  const [mode, setMode] = useState("light");
  const [modeText, setModeText] = useState("Enable Dark Mode");
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
    if (mode === "light") {
      setMode("dark");
      setModeText("Disable Dark Mode")
      document.body.style.backgroundColor = "black";
      showAlerts("Dark Mode Enabled", "success");

    } else {
      setMode("light");
      setModeText("Enable light Mode")
      document.body.style.backgroundColor = "white";
      showAlerts("Light Mode Enabled", "success")
    }
  }

  let custubMode = (event) => {
    let currentColor = event.target.id;
    setMode(currentColor);
    document.body.style.backgroundColor = currentColor;
    showAlerts("Custum Mode Enabled!", currentColor);

    console.log(event.target)

    if (event.target.id === "warning") {
      document.body.style.backgroundColor = "#241c0b";
    } else {
      document.body.style.backgroundColor = "#0f310f";
    }

  }





  return (
    <>
      <Navbar title="TextEditor" aboutEditor="About Us" mode={mode} togglemode={togglemode} custubMode={custubMode} modeText={modeText} />
      <Alerts alert={alert} />

      <div className="container my-3">
        <Formbox heading="Enter Your Text below " mode={mode} showAlerts={showAlerts} custubMode={custubMode} />

        {/* <About /> */}
      </div>




    </>
  );
}

export default App;  
