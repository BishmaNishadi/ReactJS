'use strict';
import React from 'react';
const User = props => {
    const {User} = props;
    return <tr>
        <td>{user.id}</td>
        <td>{user.name}</td>
    </tr>


};

export default User;