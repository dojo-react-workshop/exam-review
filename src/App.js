import React, { Component } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';
import RepoList from './RepoList';
import axios from 'axios';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
class App extends Component {
    state = {
        users: [],
        repos: []
    }
    handleSearchFormSubmit = (searchTerm) => {
        this.setState({
            repos: []
        })
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

    handleUserClick = (username) => {
        axios.get(`https://api.github.com/users/${username}/repos`)
            .then((response) => {
                this.setState({
                    repos: response.data
                })
            })
    }
    render() {
        return (
            <Router>
                <div className="App container">
                    <h1>Github App</h1>
                    <Route path="/" render={(props) => {
                        return <UserForm {...props} onSubmit={this.handleSearchFormSubmit} />
                    }}

                    />
                    <UserList users={this.state.users} onClick={this.handleUserClick} />
                    <Route path="/:user/repos" render={(props) => {
                        if (this.state.users.length < 1) {
                            return <Redirect to="/" />
                        }
                        return <RepoList repos={this.state.repos} />
                    }} />
                </div>
            </Router>
        )
    }
}
export default App;