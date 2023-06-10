import React from 'react';

const CommentItem = ({ comment }) => {
    return(
    <div className="card mb-3">
        <div className="card-body">
            <p className="card-text">{comment.content}</p>
            <p className="card-text">
                <small className="text-muted">Posted by {comment.author} on {comment.createdAt}</small>
            </p>
        </div>
    </div>
);
};

export default CommentItem;