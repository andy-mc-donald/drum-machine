import React, { useState, useEffect } from "react";
import DrumPad from './DrumPad';
import "./App.css";

const App = () => {
  //setting state for display text
  const [text, setText] = useState("<<Play Drum>>");

  //handling key press
  const keyPressHandler = (e) => {
    let keyPressed = String.fromCharCode(e.keyCode);
    let audio = document.getElementById(keyPressed);
    if (audio === null) {
      return;
    }
    let playAudio = () => {
      audio.play();
    };
    playAudio();
    let sound = audio.parentElement.id;
    setText(sound);
    let padPressed = audio.parentElement;
    padPressed.classList.add("active");
    setTimeout(()=>{
      padPressed.classList.remove("active");
    }, 100)
  };

  //listening for key press
  useEffect(() => {
    document.addEventListener("keydown", keyPressHandler);
    return () => {
      document.removeEventListener("keydown", keyPressHandler);
    };
  }, []);

  //handling mouse click on a pad
  const handleClick = (e) => {
    let id = e.target.id;
    let targetButton = document.getElementById(id);
    if (targetButton === null) {
      return;
    }
    let audio = targetButton.firstChild;
    let playAudio = () => {
      audio.play();
    };
    playAudio();
    setText(id);
  };

  return (
    <div id="container">
      <div id="drum-machine">
        <h4 id="heading">
          <span role="img" aria-label="drum emoji">🥁</span>FreeCodeCamp<span role="img" aria-label="drum emoji">🥁</span>
        </h4>
        <div id="display">
          <h1 id="text">{text}</h1>
        </div>
        <DrumPad clickEvent={handleClick} />
      </div>
    </div>
  );
};

export default App;
