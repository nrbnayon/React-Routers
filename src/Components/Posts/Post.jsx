import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Post = ({ post }) => {
  const { id, userId, title } = post;
  const navigate = useNavigate();

  const handleShowDetail = () => {
    navigate(`/post/${id}`);
  };
  return (
    <div className="card p-4 m-4 bg-slate-300 border-[2px] border-yellow-400 rounded-xl space-y-4 shadow-xl">
      <div className="text-center">
        <h3 className="text-2xl font-bold space-y-3">User ID: {userId}</h3>
        <p>Title: {title}</p>
        {/* <p>{phone}</p> */}
      </div>

      <Link className="btn btn-primary" to={`/post/${id}`}>
        <button>Post Details</button>
      </Link>
      <button onClick={handleShowDetail}>Click to see Dwtails</button>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Post;
