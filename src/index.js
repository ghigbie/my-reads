import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyReadsApp from './MyReadsApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MyReadsApp />, document.getElementById('app-root'));
registerServiceWorker();
