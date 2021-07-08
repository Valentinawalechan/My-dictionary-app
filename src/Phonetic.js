import React from "react";
import "./Phonetic.css";


export default function Phonetic(props) {
  let audio = new Audio(props.phonetic.audio);

    function playSound(){
        audio.play();

    }
    if(props.phonetic.audio) {

    return (
    <>
    <button onClick={playSound} className="audio">
           🔊 
        </button> {"  "}
    <span className="phonetic">{props.phonetic.text}</span><br/> 
    </>
    )
  } else {return (
      <>
        
        
        <span className="phonetic">{props.phonetic.text}</span><br/>
      </>)
      }
  
}
