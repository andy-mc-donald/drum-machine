import React from 'react';
import data from './data';

// drum-pad template rendered 9 times with data mapped from the data array
const DrumPad = ({ clickEvent }) => {
    return (
      <div id="drum-pad-container">
        {data.map((x) => {
          return (
            <button className="drum-pad" id={x.sound} onClick={clickEvent} key={x.sound}>
              <audio className="clip" id={x.letter} src={x.sampleURL}></audio>
              <h2 id="drum-pad-text">{x.letter}</h2>
            </button>
          );
        })}
      </div>
    );
  };

  export default DrumPad;