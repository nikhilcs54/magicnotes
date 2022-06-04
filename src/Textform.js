import React,{useState} from 'react';

export default function Textform(props) {
  const handleOnChange = (event) => {
    setText(event.target.value);
}
const handleUpClick = () => {
  let newText = text.toUpperCase();
  setText(newText)
  props.showAlert("Converted into UpperCase","success")
}
const handleLwClick = () => {
  let newText = text.toLowerCase();
  setText(newText)
  props.showAlert("Converted into LowerCase","success")
}
const ClearText = () => {
  let newText ='';
  setText(newText)
  props.showAlert("Your Note is Completely Cleared","success")
}
const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
        <h1>{props.heading}</h1>
        <div className="mb-3">
         <textarea className='form-control' id='mybox' value={text} rows="16" onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}}>
         </textarea>
        </div>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>UpperCase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLwClick}>LowerCase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={ClearText}>ClearText</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
     <h2>Your Note Summary</h2>
     <p>You have Written {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
     <p>You have taken {0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
     <h3>Preview</h3>
     <p>{text.length?text:"Please Write Something to Preview"}</p>
    </div>
    </>
  )
}
