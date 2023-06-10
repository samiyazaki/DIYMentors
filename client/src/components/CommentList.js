import React, {useState, useEffect } from 'react';
import axios from 'axios';
import CommentItem from './CommentItem';

const CommentList = ({ postId }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchComments = async () => {
        const res = await axios.get('/api/posts/${postId}/comments');
        setComments(res.data);
    };
    
    fetchComments();
}, [postId]);

return (
    <div>
        {comments.map((comment) => (
            <CommentItem key={comment._id} comment={comment} />
        ))}
    </div>
    );
};

export default CommentList;