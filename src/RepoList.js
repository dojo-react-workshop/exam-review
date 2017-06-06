import React, { Component } from 'react';
import { array } from 'prop-types';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class RepoList extends Component {
    state = {
        repos: [],
        selectedUser: this.props.match.params.user
    }
    componentDidMount() {
        const { selectedUser } = this.state;
        axios.get(`https://api.github.com/users/${selectedUser}/repos`)
            .then((response) => {
                console.log(response)
                this.setState({
                    repos: response.data
                })
            })
    }
    componentWillReceiveProps(nextProps) {
        const { selectedUser } = this.state;
        const nextUser = nextProps.match.params.user
        if (nextUser !== selectedUser) {
            axios.get(`https://api.github.com/users/${nextUser}/repos`)
                .then((response) => {
                    this.setState({
                        repos: response.data,
                        selectedUser: nextUser
                    })
                });
        }
    }

    render() {
        if (this.props.shouldRedirect) {
            return <Redirect to="/" />
        }
        const tableRows = this.state.repos.map((repo) => {
            return (
                <tr key={repo.id}>
                    <td>{repo.name}</td>
                </tr>
            )
        })
        return (
            <div className="row">
                <table className="table" >
                    <thead>
                        <tr>
                            <th width="500">Repos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableRows}
                    </tbody>
                </table>
            </div>
        )

    }
}

RepoList.propTypes = {
    repos: array
}
export default RepoList;
