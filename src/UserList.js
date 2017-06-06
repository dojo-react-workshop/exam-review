import React from 'react';
import { array } from 'prop-types';
import { Link } from 'react-router-dom';

const UserList = (props) => {
    const tableRows = props.users.map((user) => {
        return (
            <tr key={user.id}>
                <td><Link to={`/${user.login}/repos`}>{user.login}</Link></td>
            </tr>
        )
    })
    return (
        <div className="row">
            <table className="table" >
                <thead>
                    <tr>
                        <th width="500">Users</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
        </div>
    )
}

UserList.propTypes = {
    users: array.isRequired
}

export default UserList;