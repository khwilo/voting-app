import React from 'react';

const Avatar = () => {
    const url = "https://api.adorable.io/avatars/50/abott@adorable.png";
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
