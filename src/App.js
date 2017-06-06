import React, { Component } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';
import RepoList from './RepoList';

class App extends Component {
    render() {
        const { users, repos } = this.props;
        return (
            <div className="App container">
                <h1>Github App</h1>
                <UserForm />
                <UserList users={users} />
                <RepoList repos={repos} />
            </div>
        )
    }
}
export default App;