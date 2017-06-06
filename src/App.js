import React, { Component } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';
import RepoList from './RepoList';
import axios from 'axios';

class App extends Component {
    state = {
        users: []
    }
    handleSearchFormSubmit = (searchTerm) => {

        return axios.get(`https://api.github.com/search/users?q=${searchTerm}`)
            .then(({ data }) => {
                const { items: users } = data;
                if (users < 1) {
                    this.setState({
                        users: []
                    })
                    throw new Error('No results');
                }
                this.setState({
                    users: users
                });
            });
    }
    render() {
        const { repos } = this.props;
        return (
            <div className="App container">
                <h1>Github App</h1>
                <UserForm onSubmit={this.handleSearchFormSubmit} />
                <UserList users={this.state.users} />
                <RepoList repos={repos} />
            </div>
        )
    }
}
export default App;