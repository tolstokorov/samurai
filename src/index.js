import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import state from './bll/store';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={ process.env.PUBLIC_URL }>
      <App
        posts={ state.posts }
        messages={ state.messages }
        dialogs={ state.dialogs }
        owner={ state.owner }
      />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
