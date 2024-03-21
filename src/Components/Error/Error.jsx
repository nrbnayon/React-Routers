import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <h2>Oops!</h2>
      <p>{error.statusText || error.message}</p>
      {error.status === 404 && (
        <div>
          <h3>Page Not Found</h3>
        </div>
      )}
      <h3>
        <Link to="/">
          <button>Go Back Home</button>
        </Link>
      </h3>
    </div>
  );
};

export default Error;
