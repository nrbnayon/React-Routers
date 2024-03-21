import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
  const navigate = useNavigate();
  const { postId } = useParams();
  console.log(postId);
  const post = useLoaderData();
  return (
    <div className="modal-box">
      <h3 className="font-bold text-lg uppercase">{post.title}</h3>
      <p className="py-4">Description: {post.body}</p>
      <div className="modal-action">
        <form method="dialog">
          <Link className="btn" to="/posts">
            Back
          </Link>
          <button onClick={() => navigate(-1)}>Go Back</button>
        </form>
      </div>
    </div>
  );
};

export default PostDetails;
