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
    const handlelowclick = ()=>{
      let rtext=text.toLowerCase()
      setText(rtext)
    }
  return (
    <>
    <div>
        <h1>{props.heading}</h1>
            <div className="mb-3">  
            <textarea className="form-control" value={text} placeholder="Enter Text Here" id="Textarea" rows="8" onChange={handleOnChange}></textarea>
            </div>
            <div className='d-flex container  justify-content-between'>
              <button className="btn btn-info" onClick={handleUpClick}>Convert To Uppercase</button>
              <button className="btn btn-info" onClick={handlelowclick}> Convert To Lowercase</button>
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
