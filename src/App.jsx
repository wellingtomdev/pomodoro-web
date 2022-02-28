import React from 'react'
import './App.css';

import Tags from './components/Tags'
import Timer from './components/Timer'
import Controls from './components/Controls'

function App() {
  return (
    <div id="display">
        <Tags />
        <Timer />
        <Controls />
        {/* <audio src="notificationSond.mp3" id='audioNotification' style='display: none;'></audio> */}
    </div>
    
  );
}

export default App;
