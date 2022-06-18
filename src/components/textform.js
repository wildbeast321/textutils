import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText]= useState("");
    const handleUpClick = ()=>{      
        let newtext=text.toUpperCase()
        setText(newtext)
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const handleLowClick = ()=>{
      let rtext=text.toLowerCase()
      setText(rtext)
    }
    const handleClearClick = ()=>{
      setText("")
    }
    const handleTitleClick = ()=>{
      let str=text.split(" ")
      for (let i = 0; i < str.length; i++){
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1).toLowerCase();
      }
      setText(str.join(" "))
      
    }
    const handleInverseClick = ()=>{
      let str=text.split(" ")
      for (let i = 0; i < str.length; i++){  
        let ptr=str[i].split("");
          for (let j=0; j<ptr.length;j++){
            if(j%2===0){ 
             ptr[j] = ptr[j].charAt(0).toUpperCase();
            }
            if(j%2!==0){
              ptr[j] = ptr[j].charAt(0).toLowerCase();
            } 
          }
        str[i]=ptr.join("");
      }
      setText(str.join(" "))
      
    }
  return (
    <>
    <div>
        <h1>{props.heading}</h1>
            <div className="mb-3">  
            <textarea className="form-control" value={text} placeholder="Enter Text Here" id="Textarea" rows="8" onChange={handleOnChange}></textarea>
            </div>
            <div className='d-flex container  justify-content-between'>
              <button className="btn btn-info" onClick={handleUpClick}>Convert To UPPERCASE</button>
              <button className="btn btn-info" onClick={handleLowClick}> Convert To lowercase</button>
              <button className="btn btn-info" onClick={handleTitleClick}>Convert to TitleCase</button>
              <button className="btn btn-info" onClick={handleInverseClick}>Convert to InVeRsEcAsE</button>
              <button className="btn btn-info" onClick={handleClearClick}>Clear Text</button> 
            </div>  
    </div>
    <div className="container my-5">
      <h1>Text Summary</h1>
      <p><b>Letter:</b> {text.length}<br/><b>Words:</b> {text.split(" ").length}<br/><b>Minutes need to read it:</b> {0.008*text.split(" ").length}</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
