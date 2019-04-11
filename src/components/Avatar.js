import React from 'react';

const Avatar = () => {
    const url = "https://www.gravatar.com/avatar/nothing";
    return (
        <div className="avatar">
            <p>Submitted by: </p>
            <img
                src       = {url}
                alt       = "avatar"
                className = "userImg"
            />
        </div>
    );
}

export default Avatar;
