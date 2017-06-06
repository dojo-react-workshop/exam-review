import React, { Component } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';
import RepoList from './RepoList';

class App extends Component {
    render() {
        return (
            <div className="App container">
                <h1>Github App</h1>
                <UserForm />
                <UserList />
                <RepoList />
            </div>
        )
    }
}
export default App;