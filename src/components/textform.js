import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText]= useState("");
    const handleUpClick = ()=>{      
      if(text===""){props.showalert("Cannot be left blank","warning")}
        else{
        let newtext=text.toUpperCase()
        setText(newtext)  
        props.showalert("Converted to UpperCase","success")
      }
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const handleLowClick = ()=>{
    if(text===""){props.showalert("Cannot be left blank","warning")}
    else{
      let rtext=text.toLowerCase()
      setText(rtext)
      props.showalert("Converted to LowerCase","success")
        }
    }
    const handleClearClick = ()=>{
      setText("")
      props.showalert("TextArea Cleared","success")
          
    }
    const handleTitleClick = ()=>{
      if(text===""){props.showalert("Cannot be left blank","warning")}
      else{
      let str=text.split(" ")
      for (let i = 0; i < str.length; i++){
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1).toLowerCase();
      }
      setText(str.join(" "))
      props.showalert("Converted to TitleCase","success")
          } 
    }
    const handleInverseClick = ()=>{
      if(text===""){props.showalert("Cannot be left blank","warning")}
      else{
      let str=text.split(" ")
      for (let i = 0; i < str.length; i++){  
        let ptr=str[i].split("");
          for (let j=0; j<ptr.length;j++){
            if(j%2===0){ 
             ptr[j] = ptr[j].charAt(0).toUpperCase();
            }
            else if(j%2!==0){
              ptr[j] = ptr[j].charAt(0).toLowerCase();
            } 
          }
        str[i]=ptr.join("");
      }
      setText(str.join(" "))
      props.showalert("Converted to Inverse Case","success")
          }
    }
    const handleReverseText = () => {
      if(text===""){props.showalert("Cannot be left blank","warning")}
      else{
      let newText = text.split('').reverse().join('');
      setText(newText);
      props.showalert("Text Reversed","success")
          }
    }
    const handleExtraSpaces=()=>{ 
      if(text===""){props.showalert("Cannot be left blank","warning")}
      else{
      let newText= text.split(/[ ]+/)
      setText(newText.join(" "))
    props.showalert("Extra Spaces Removed","success")
          }
    }
    
 
  return (
    <>
    <div>
      <h1 style={props.textformcolor}>Enter the text to analyse</h1>
            <div className="container mb-2">  
            <textarea className="form-control" value={text} placeholder="Enter Text Here" id="Textarea" rows="8" onChange={handleOnChange} style={props.textareacolor}></textarea>
            </div>
            <div className='d-sm-flex container justify-content-between '>
              <button className={`btn btn-${props.btncolor} my-1 mx-1 w-100`} onClick={handleUpClick}>Convert To UPPERCASE</button>
              <button className={`btn btn-${props.btncolor} my-1 mx-1 w-100`} onClick={handleLowClick}> Convert To lowercase</button>
              <button className={`btn btn-${props.btncolor} my-1 mx-1 w-100`} onClick={handleTitleClick}>Convert to TitleCase</button>
              <button className={`btn btn-${props.btncolor} my-1 mx-1 w-100`} onClick={handleInverseClick}>Convert to InVeRsEcAsE</button>
              <button className={`btn btn-${props.btncolor} my-1 mx-1 w-100`} onClick={handleReverseText}>Convert to txeT esreveR</button>
              <button className={`btn btn-${props.btncolor} my-1 mx-1 w-100`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
              <button className={`btn btn-${props.btncolor} my-1 mx-1 w-100`} onClick={handleClearClick}>Clear Text</button> 
            </div>  
    </div>
    <div className="container my-5">
      <h1 style={props.textformcolor}>Text Summary</h1>
      <p  style={props.textformcolor}><b>Letter:</b> {text.length}<br/><b>Words:</b> {text.split(" ").filter((element)=>{return element.length!==0}).length}<br/><b>Minutes need to read it:</b> {0.008*text.split(" ").filter((element)=>{return element.length!==0}).length}</p>
      <h2 style={props.textformcolor}>Preview</h2>
      <p  style={props.textformcolor}>{text.length>0?text:"Enter text above to preview"}</p>
    </div>
    </>
  )
}
