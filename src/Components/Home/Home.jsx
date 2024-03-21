import { Outlet, useLocation, useNavigation } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Home = () => {
  const navigation = useNavigation();
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <div>
        <NavBar />
        <div className="drawer drawer-start">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-4"
              className="drawer-button btn btn-primary"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}
              <li>
                <a>Sidebar Item 1</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {navigation.state === "loading" ? <p>Loading...</p> : <Outlet />}
      {/* <Outlet /> */}
      <Footer />
    </div>
  );
};

export default Home;
