import React from 'react';
import { array } from 'prop-types';

const UserList = (props) => {
    const tableRows = props.users.map((user) => {
        return (
            <tr key={user.id}>
                <td>{user.login}</td>
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