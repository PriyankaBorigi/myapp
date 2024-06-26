import React,{useState} from 'react'

export default function TextFrom(props) {

  const handleUpClick=()=>{
    // console.log("Uppercase was clicked" + text);
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!","success");
  }
  
  const handleLoClick=()=>{
    // console.log("Uppercase was clicked" + text);
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!","success");
  }
  
  const handleOnChange=(event)=>{
    // console.log("On change");
    setText(event.target.value);
    
  }
  const handleClearClick=()=>{
    let newText='';
    setText(newText);
    props.showAlert("Text Cleared!","success");
  }

  const handleCopy=()=>{
    console.log("I am Copying");
    var text=document.getElementById("myBox")
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!","success");
  }

  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra space removed!","success");
  }

  const [text,setText]=useState('');
  //text="new text"; //wrong way to change the state
  //setText("new test"); //correct way to change the state
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white'}} id="myBox" rows="3"></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to Lowercase</button>
        <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear Text</button>
        <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
        <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Remove Space</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Mintues read</p>
       <h2>Preview</h2>
       <p>{text.length>0?text:"Enter text to preview here"}</p>
    </div>
    </>
  )
}
