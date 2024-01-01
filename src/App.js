import React,{useState} from 'react';
import Tooltip from './Tooltip';
import './App.css'

const App = () => {
  const [position, setPosition] = useState('TOP'); // default position set to 'TOP'

  return (

    <div className="container">
      <h1>Tooltip Example</h1>
      <div className="controls">
          {/* All buttons for different oprations to click */}
        <button onClick={() => setPosition('TOP')}>Top</button>
        <button onClick={() => setPosition('BOTTOM')}>Bottom</button>
        <button onClick={() => setPosition('LEFT')}>Left</button>
        <button onClick={() => setPosition('RIGHT')}>Right</button>
        </div>

          {/* Tooltips container */}
      <Tooltip className="tips" position={position} text="This is a tooltip!">
        <p>Hover over me to see tooltip</p>
      </Tooltip>
    </div>
  );
};

export default App;
