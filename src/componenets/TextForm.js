import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick= ()=>{
        console.log("Uppercase was clicked" +  text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase", "success")
    }

    const handleLoClick= ()=>{
        console.log("Lowercase was clicked" +  text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase", "success")
    }

    const handelOnChange= (event)=>{
        console.log("On Change")
        setText(event.target.value)
    }

  const [text, setText] = useState("");
  return (
    <>
    <div className='container' style={{color:props.mode === 'dark'?'white':'#042743'}} rows="8" value={text} onChange={handelOnChange}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="exampleFormControlTextarea1" style={{backgroundColor:props.mode === 'dark'?'grey':'white', color:props.mode === 'dark'?'white':'#042743'}} rows="8" value={text} onChange={handelOnChange}></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To Uppercase</button>
        <button className="btn btn-primary" onClick={handleLoClick}>Convert To Lowercase</button>
    </div>
    <div className="container my-3" style={{color:props.mode === 'dark'?'white':'#042743'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Privew</h3>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}