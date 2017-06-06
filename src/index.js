import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import repos from './repos.json';
import userData from './users.json';

ReactDOM.render(<App repos={repos} users={userData.items} />, document.getElementById('root'));
