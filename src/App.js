import React, { Component } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';
import RepoList from './RepoList';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom'
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
        return (
            <Router>
                <div className="App container">
                    <h1>Github App</h1>
                    <UserForm onSubmit={this.handleSearchFormSubmit} />
                    <UserList users={this.state.users} />
                    <Route path="/:user/repos" render={(props) => {
                        return <RepoList {...props} shouldRedirect={this.state.users.length < 1} />
                    }} />
                </div>
            </Router>
        )
    }
}
export default App;