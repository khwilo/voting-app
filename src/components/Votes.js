import React, { Component } from "react";

class Votes extends Component {
    render() {
        const { voteCount, onUpVote, product } = this.props;
        return (
            <div className="votesContainer">
                <p>
                    <i
                        onClick     = {() => onUpVote(product)}
                        className   = "fa fa-caret-up upVote"
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
