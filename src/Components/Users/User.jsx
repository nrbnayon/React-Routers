import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const User = ({ user }) => {
  const { id, name, email, phone } = user;
  return (
    <div className="card p-4 m-4 bg-slate-300 border-[2px] border-yellow-400 rounded-xl space-y-4 shadow-xl">
      <div className="text-center">
        <h3 className="text-2xl font-bold space-y-3">{name}</h3>
        <p>{email}</p>
        <p>{phone}</p>
      </div>
      <button>
        <Link className="btn btn-primary" to={`/user/${id}`}>
          Show Details
        </Link>
      </button>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired,
};

export default User;
