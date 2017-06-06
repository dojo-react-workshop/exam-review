import React from 'react';
import { array } from 'prop-types';

const RepoList = (props) => {
    const tableRows = props.repos.map((repo) => {
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


RepoList.propTypes = {
    repos: array
}
export default RepoList;
