import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import state, { addPost, setNewPostText } from './bll/store';

window.state = state;

const render = () => {
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={ process.env.PUBLIC_URL }>
      <App
        owner={ state.owner }

        profilePage={ state.profilePage }
        setNewPostText={ setNewPostText }
        addPost={ addPost }

        dialogsPage={ state.dialogsPage }
      />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
};
render();