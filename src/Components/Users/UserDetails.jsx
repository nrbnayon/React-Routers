import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const { name } = user;
  return (
    <div>
      <p>Name: {name}</p>
    </div>
  );
};

export default UserDetails;
