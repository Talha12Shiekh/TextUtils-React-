import React from 'react';


export default function About(props) {
  // const [myStyle, SetmyStyle] = useState({
  //   color: 'white',
  //   backgroundColor: 'black',
  // });
let myStyle = {
  color : props.mode === 'dark' ? 'white' : '#042743',
  backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
  border: '1px solid',
  borderColor : props.mode === 'dark' ? 'white' : '#042743',
}

  // const [btnText,setBtnText] = useState("Enable dark mode")

  // const toogleStyle = () => {
  //   if (myStyle.color === 'white') {
  //     SetmyStyle({
  //       color: 'black',
  //       backgroundColor: 'white',
  //     })
  //     setBtnText("Enable dark mode");
  //   }else{
  //     SetmyStyle({
  //       color: 'white',
  //       backgroundColor: 'black',
  //       border : '1px solid white'
  //     })
  //     setBtnText("Enable light mode");
  //   }
  // }
  return (
    
<div className="container" style={{color : props.mode === 'dark' ? 'white' : '#042743'}}>
<h1 className='my-3'>About us</h1>
<div className="accordion" id="accordionExample">
    <div className="accordion-item" style={myStyle}>
      <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
           <strong>Analyze your text</strong>
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
          Text utils gives you a way to analyze your text quickly and efficently be it word count character count or
        </div>
      </div>
    </div>
    <div className="accordion-item" style={myStyle}>
      <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle} >
         <strong>Free to use</strong>
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
          Text utils is a free character count tool that provides instant character count and  workd count statistics for a given text ,Textutils reports the number of words and characters ,thus it is suitable to write words white word/character limit
        </div>
      </div>
    </div>
    <div className="accordion-item" style={myStyle}>
      <h2 className="accordion-header" id="headingThree">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
          <strong>Browser compatible </strong>
        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample"  style={myStyle}>
        <div className="accordion-body"  style={myStyle}>
          The word counter software works in any web browser such as Chrome ,FireFox ,Internet explorer ,Safari etc it suits to count characters in facebook ,blog ,books ,excel document ,pdf document ,essays ,etc. 
        </div>
      </div>
    </div>
  </div>
  {/* <div className="container my-3">
    <button type='button' onClick={toogleStyle} className='btn btn-primary '>{btnText}</button>
    </div> */}
</div>

  )
}
