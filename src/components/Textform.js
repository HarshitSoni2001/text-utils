import React,{useState} from 'react'

export default function Textform(props) {
    const handleupclick=()=>{
        // console.log("upper case clicked"+text);
        let newtext=text.toUpperCase()
        setText(newtext);
        props.showAlert("converted to uppercase","success")
    }
    const handlelowerclick=()=>{
        // console.log("upper case clicked"+text);
        let newtext=text.toLowerCase()
        setText(newtext);
        props.showAlert("converted to LowerCase","success")
    }
    const handleonchange=(event)=>{
        console.log("on change");
        setText(event.target.value)
    }
    const speak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
    }
const [text,setText]=useState(' ');
  return (
    <>
    <div className="container" style={{color: props.mode==='light'?'#042743':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor: props.mode==='light'?'white':'grey',color:props.mode==='light'?'#042743':'white'}} id="myBox" rows="8"></textarea>
      </div>
        <button className="btn btn-primary mx-2" onClick={handleupclick}>Convert to Uppercase</button>
        <button className="btn btn-primary " onClick={handlelowerclick}>Convert to lowercase</button>
        <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>


    </div>
    <div className="container my-3" style={{color: props.mode==='light'?'#042743':'white'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}
