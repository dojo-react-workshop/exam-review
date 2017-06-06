import React, { Component } from 'react';
import { array } from 'prop-types';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class RepoList extends Component {
    state = {
        repos: []
    }

    componentDidMount() {
        const { user } = this.props.match.params
        axios.get(`https://api.github.com/users/${user}/repos`)
            .then((response) => {
                this.setState({
                    repos: response.data
                })
            })
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
