import { useLoaderData } from "react-router-dom";
import Post from "./Post";

const Posts = () => {
  const posts = useLoaderData();
  //   console.log(posts);
  return (
    <div>
      <h3 className="text-center text-2xl font-bold">Posts </h3>
      <div className="grid grid-cols-3 gap-6">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
