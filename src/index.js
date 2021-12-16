import React from 'react';
import ReactDOM from 'react-dom';

import Board from './components/Board/Board';

ReactDOM.render(
  <React.StrictMode>
    <div style={{border:'1px solid black', height:'500px', width:'500px' }}>
      <Board knightPosition={[0, 0]} />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);