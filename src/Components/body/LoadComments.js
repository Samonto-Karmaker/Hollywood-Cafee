import React from "react";
import dateFormat from "dateformat";

const LoadComments = props => {
    return(
        props.comments.map(comment => {
            return(
                <div key = {comment.id}>
                    <h4>{comment.author}</h4>
                    <p>{comment.comment}</p>
                    <p>{dateFormat(comment.date, "ddd, mmm d, yyyy, h:MM TT")}</p>
                </div>
            )
        })
    )
}

export default LoadComments