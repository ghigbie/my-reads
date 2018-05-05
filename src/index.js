import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

import MyReadsApp from './MyReadsApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BrowserRouter>
                    <MyReadsApp />
                </BrowserRouter>, 
                document.getElementById('app-root'));
                
registerServiceWorker();
