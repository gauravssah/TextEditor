import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Formbox from './components/Formbox';
import About from './components/About';
import React, { useState } from 'react'


function App() {

  const [mode, setMode] = useState("light");

  let togglemode = () => {
    if (mode == "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black"

    } else {
      setMode("light");
      document.body.style.backgroundColor = "white"
    }

  }




  return (
    <>
      <Navbar title="TextEditor" aboutEditor="About Us" mode={mode} togglemode={togglemode} />

      <div className="container my-3">
        <Formbox heading="Enter Your Text below " mode={mode} />

        {/* <About /> */}
      </div>




    </>
  );
}

export default App;  
