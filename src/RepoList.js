import React from 'react';

const UserList = () => {
    return (
        <div className="row">
            <table className="table" >
                <thead>
                    <tr>
                        <th width="500">Repos</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>gameServer</td>
                    </tr>
                    <tr>
                        <td>thinking-in-react</td>
                    </tr>
                    <tr>
                        <td>YoutubeBinge</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default UserList;