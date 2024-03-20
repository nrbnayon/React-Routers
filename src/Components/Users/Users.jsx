// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import User from "./User";

const Users = () => {
  //   const [users, setUsers] = useState([]);
  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((res) => res.json())
  //       .then((data) => setUsers(data));
  //   }, []);()
  const users = useLoaderData();
  return (
    <div>
      <p>{users.length}</p>
      <div className="grid grid-cols-3 gap-6">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
