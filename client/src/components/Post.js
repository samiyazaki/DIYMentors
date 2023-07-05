import PropTypes from 'prop-types';

const Post = ({ post }) => {
  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
  }),
};

export default Post;
