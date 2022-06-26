import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';



function App() {
  const [mode, setMode] = useState('light');
  const [navtext, setNavText] = useState("dark");
  const [textnav, settextnav] = useState("Light Mode");
  const [btncolor, setbtncolor] = useState("info");
  const [textformcolor, settextformcolor] = useState({
    color: "black"
  });
  const [borderstyle, setborderstyle] = useState({
    color: 'black',
    background: "rgb(248,249,250)",
  });
  const [textareacolor, settextareacolor] = useState({
    background: "rgb(248,249,250)",
    color:"black"

  });
  const [mystyle, setMyStyle] = useState({
    color: 'black',
    background: "rgb(248,249,250)",
    
  })
  const [alert, setAlert] = useState(null);
  const showalert=(message,type)=>{
    setAlert(
      {
        msg:message,
        type: type
      })
    setTimeout(()=>{
    setAlert(null)},2000
        )
    
  }
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
    setborderstyle({
      color: "white",
      backgroundColor: "rgb(42,42,45)",
    })
      showalert("Dark mode Has been enabled", "success")
    
    settextformcolor({
      color:"white"
    })
    settextareacolor({
      backgroundColor: "black",
      color:"white"
    })
    setbtncolor("danger")

    }
    else if (mode==="dark"){
      setMode("light")
      setNavText("dark")
      settextnav("Light Mode")
      document.body.style.backgroundColor="rgb(255,255,255)";
      setMyStyle({
        color: "black",
        backgroundColor: "rgb(248,249,250)",
        
    })
      setborderstyle({
      color: "black",
      backgroundColor: "rgb(248,249,250)",
    })
    settextformcolor({
      color:"black"
    })
    settextareacolor({
      background: "rgb(248,249,250)",
      color:"black"
    })
    showalert("Light mode Has been enabled", "success")
    setbtncolor("info")
    }
    
  }
 
 
  return (
    <>
      <Router>
        <Navbar title="TextUtils" about="About" home="Home" mode={mode} toggleMode={toggleMode} navtext={navtext} textnav={textnav}/>
        <Alert alert={alert}/>
        <div className="container my-2">
          <Routes>
            <Route exact path="/About" element={<About title="About Us" mystyle={mystyle} borderstyle={borderstyle}/>}/>
            <Route exact path="/" element={<TextForm showalert={showalert} heading="Enter the text to analyse" btncolor={btncolor} textformcolor={textformcolor} textareacolor={textareacolor}/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
  }

export default App;
