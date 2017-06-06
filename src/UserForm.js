import React from 'react';

const UserForm = () => {
    return (
        <div className="row">
            <div className="large-12 columns">
                <label>User Search</label>
                <input type="text" placeholder="Github username..." />
                <button>Search</button>
            </div>
        </div>
    )
}
export default UserForm;