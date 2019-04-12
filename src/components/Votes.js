import React from "react";

const Votes = ({ voteCount }) => {
    return (
        <div className="votesContainer">
            <p><i className="fa fa-caret-up upVote" aria-hidden="true"></i></p>
            <p className="voteCount">{voteCount}</p>
        </div>
    );
}

export default Votes;
