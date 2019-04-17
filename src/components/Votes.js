import React, { Component } from "react";

class Votes extends Component {
    render() {
        const { voteCount, onVote, product } = this.props;
        return (
            <div className="votesContainer">
                <p>
                    <i
                        onClick     = {() => onVote(product, "upvote")}
                        className   = "fa fa-caret-up upVote"
                        aria-hidden = "true"
                    >
                    </i>
                </p>
                <p>
                    <i
                        onClick     = {() => onVote(product, "downvote")}
                        className   = "fa fa-caret-down downVote"
                        aria-hidden = "true"
                    >
                    </i>
                </p>
                <p className="voteCount">
                    {voteCount}
                </p>
            </div>
        );
    }
}

export default Votes;
