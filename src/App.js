import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/textform';
import React, { useState } from 'react';


function App() {
  const [mode, setMode] = useState('light');
  const [navtext, setNavText] = useState("dark");
  const [textnav, settextnav] = useState("Light Mode");
  const [textformcolor, settextformcolor] = useState({
    color: "black"
  });
  const [textareacolor, settextareacolor] = useState({
    background: "rgb(248,249,250)",
    color:"black"

  });
  const [mystyle, setMyStyle] = useState({
    color: 'black',
    background: "rgb(248,249,250)"
  })
  const toggleMode= ()=>{
    if(mode==="light"){
      setMode("dark")
      setNavText("light")
      settextnav("Dark Mode")
      document.body.style.backgroundColor="rgb(50,50,50)";
      setMyStyle({
        color: "white",
        backgroundColor: "rgb(42,42,45)",
        border: "1px solid white"
    })
    settextformcolor({
      color:"white"
    })
    settextareacolor({
      backgroundColor: "black",
      color:"white"
    })

    }
    else if (mode==="dark"){
      setMode("light")
      setNavText("dark")
      settextnav("Light Mode")
      document.body.style.backgroundColor="rgb(255,255,255)";
      setMyStyle({
        color: "black",
        backgroundColor: "rgb(255,255,255)",
        border: "1px solid black"
    })
    settextformcolor({
      color:"black"
    })
    settextareacolor({
      background: "rgb(248,249,250)",
      color:"black"
    })
    }
  }
 
  return (
    <>
    <Navbar title="TextUtils" about="About" home="Home" mode={mode} toggleMode={toggleMode} navtext={navtext} textnav={textnav}/>
    <div className="container my-2">
      <TextForm heading="Enter the text to analyse" textformcolor={textformcolor} textareacolor={textareacolor}/>
    </div>
    <About title="About Us" mystyle={mystyle} />
    </>
  );
  }

export default App;
