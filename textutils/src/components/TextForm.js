import React,{useState} from 'react'



export default function TextForm(props) {
  
    const handleUpClick=()=>{
   
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleLoClick=()=>{
   
      let newText=text.toLowerCase();
      setText(newText)
  }
  const downloadTxtFile = () => {

    const element =
    
    document.createElement("a");
    
    const file = new Blob([text], {type: "text/plain"});
    
    element.href = URL.createObjectURL(file);
    
    element.download = "myFile.txt";
    
    element.click();
    
    }
 /* Reverse array*/

const handleReverse = (event) => { 
  let strArr = text.split("");
  strArr = strArr.reverse(); /* Convert array to string*/
   let newText = strArr.join(""); 
   setText(newText);

};

const handleCopy=()=>{
  console.log("I am copy");
  var text=document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
}
const handleonChange=(event)=>{
 
    setText(event.target.value);
}

//const wordCount=(text)=>{
  //return text.replace(/\n/g,"").split('').filter(text=>text!=="").length
//};

    const [text, setText]=useState('');
 
  return (
    <>
    <div className="container">
       <h1>{props.heading}</h1>
<div className="mb-3">
  
  <textarea className="form-control" value={text} onChange={handleonChange} id="myBox" rows="8"></textarea>
</div>
      <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert To Uppercase</button>
      <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert To LowerCase</button>
      <button className="btn btn-primary mx-3" onClick={downloadTxtFile}>Download Text</ button>
      <button className="btn btn-primary mx-3" onClick={handleReverse}>Reverse Text</ button>
      <button className="btn btn-primary mx-3" onClick={handleCopy}>CopyText</ button>
      
    </div>
    <div className="container my-3">
      <h2>Your Text Summary</h2>
      <p> {text === " "?0:text.split(" ").length-1} words and {text.length} character </p> 
      <p> {text === " "?0:text.split(" ").length* 0.008}Minutes to read

</p>
<h2>preview</h2>
<p>{text}</p>
     
    </div>
    </>
  )
}
