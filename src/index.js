import React from 'react';
import ReactDOM from 'react-dom';
import { observe } from './Game';

import Board from './components/Board/Board';

observe((knightPosition) =>
  ReactDOM.render(<div style={{ border: '1px solid black', height: '500px', width: '500px' }}><Board knightPosition={knightPosition} /></div>, document.getElementById('root'))
);