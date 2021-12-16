import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';
import Game from './components/Game/Game';

ReactDOM.render(<Provider store={createStore(reducers)}><Game /></Provider>, document.getElementById('root'));