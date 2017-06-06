import React, { Component } from 'react';
import { func } from 'prop-types';
import { Link } from 'react-router-dom';

class UserForm extends Component {
    state = {
        searchTerm: '',
        error: null
    }
    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        });
    }
    handleSubmit = (event) => {
        if (this.props.location.path !== '/') {
            this.props.history.push(`/`)
        }
        this.props.onSubmit(this.state.searchTerm)
            .then(() => {
                this.setState({ searchTerm: '', error: null })

            })
            .catch(() => {
                this.setState({
                    error: 'Unrecognized username'
                })
            })
    }
    render() {
        let potentialError = null;
        if (this.state.error) {
            potentialError = <p className="notification-box alert">{this.state.error}</p>
        }
        return (
            <div className="row">
                <div className="large-12 columns">
                    {potentialError}
                    <label>User Search</label>
                    <input
                        type="text"
                        placeholder="Github username..."
                        value={this.state.searchTerm}
                        onChange={this.handleChange}
                    />
                    <button onClick={this.handleSubmit} disabled={this.state.searchTerm === ''}>Search</button>
                </div>
            </div>
        )
    }
}

UserForm.propTypes = {
    onSubmit: func.isRequired
}
export default UserForm;