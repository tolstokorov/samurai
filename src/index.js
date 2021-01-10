import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import store from './bll/store';

window.messages = store.state.dialogsPage.messages;

const renderRoot = () => {
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={ process.env.PUBLIC_URL }>
      <App
        store={ store }
      />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
};
renderRoot();
store.subscriber(renderRoot);