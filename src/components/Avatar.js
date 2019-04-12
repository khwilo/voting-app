import React from 'react';

const Avatar = ({ avatarUrl }) => {
    const url = avatarUrl;
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
