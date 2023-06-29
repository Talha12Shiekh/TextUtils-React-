import React , {useState} from 'react'

export default function TextForm(props) {
    const [text ,SetText] = useState("");

    // SetText("this is your value"); correct way to change
    const handleOnchange = (e)=>{
        // console.log("on change");
        SetText(e.target.value);
    }
    const handelUpclick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        SetText(newText);
        props.showAlert("Your message has been converted to UpperCase","success")

    }
    const handelLowclick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        SetText(newText);
        props.showAlert("Your message has been converted to LowerCase","success")
    }
    const handelClearclick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = "";
        SetText(newText);
        props.showAlert("Your text has been cleared","success")
    }
    const handelRedclick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.charAt(0).toUpperCase()+text.slice(1);
        SetText(newText);
        props.showAlert("Your message has been Capitalized","success")
    }
    const handelCopy = ()=>{
        // console.log("Uppercase was clicked" + text);
        let Text = document.getElementById('myBox');
        Text.select();
        // Text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(Text.value);
        props.showAlert("Your text has been copied to cliboard","success")
    }
    const handelExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        SetText(newText.join(' '));
        props.showAlert("Extra spaces has been removed","success")
    }
  return (
    <>
    <div className='container'>
    <h1 style={{color: props.mode === 'light' ? 'black' : 'white'}}>{props.heading}</h1>
      <div className="form-group">
    <textarea className="form-control" value={text} onChange={handleOnchange}  id="myBox" rows="8" style={{backgroundColor : props.mode === 'light' ? 'white' : '#13466e', color: props.mode === 'light' ? 'black' : 'white'}}></textarea>
  </div>
  <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handelUpclick}>Convert to uppercase</button>
  <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handelLowclick}>Convert to LowerCase</button>
  <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handelClearclick}>Clear all text</button>
  <button disabled={text.length===0} className="btn btn-info mx-1 my-1" onClick={handelRedclick}>Capitalize text</button>
  <button disabled={text.length===0} className="btn btn-warning mx-1 my-1" onClick={handelCopy}>Copy text</button>
  <button disabled={text.length===0} className="btn btn-secondary mx-1 my-1" onClick={handelExtraSpaces}>Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words {text.length} characters</p>
      
      <p>{0.008 * text.split(' ').filter((element)=>{return element.length !== 0}).length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.length > 0? text: "Enter some text in the above textArea to preview it here"}</p>
      
    </div>
    </>
  )
}
