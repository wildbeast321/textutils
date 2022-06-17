import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText]= useState("");
    const handleUpClick = ()=>{
        console.log("Button was clicked"+ text);
        let newtext=text.toUpperCase()
        setText(newtext)
    }
    const handleOnChange = (event)=>{
        console.log("On change")
        setText(event.target.value)
    }
  return (
    <div>
        <h1>{props.heading}</h1>
            <div className="mb-3">  
            <textarea className="form-control" value={text} placeholder="Enter Text Here" id="Textarea" rows="8" onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-info" onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
  )
}
