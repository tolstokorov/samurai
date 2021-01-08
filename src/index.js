import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';

// stub
const posts = [];
  
for(let i = 1; i <= 5; ++i) {
  posts.push({
    id: i,
    name: `User_${i}`,
    message: 'blah-blah-blah-blah-blah-blah-blah-blah-blah-blah-blah-blah-blah-blah-blah-blah-blah-\
    blah-blah-blah-blah-blah-blah-blah-blah',
    likesCount: 42
  });
}
// end stub

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={ process.env.PUBLIC_URL }>
      <App
        posts={ posts }
      />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
