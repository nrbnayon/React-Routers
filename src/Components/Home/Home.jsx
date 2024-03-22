import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
// import SimpleForm from "../SimpleForm/SimpleForm";
import StatefulForm from "../SimpleForm/StatefulForm";
import RefForm from "../SimpleForm/RefForm";
import HookForm from "../HookForm/HookForm";

const Home = () => {
  const navigation = useNavigation();
  // const location = useLocation();
  // console.log(location);
  return (
    <div>
      <div>
        <NavBar />
        <div>
          <h3 className="text-center text-3xl font-bold my-2 ">Form Master</h3>
          {/* {<SimpleForm />} */}
          <StatefulForm />
          <br />
          <RefForm />
          <p className="text-center text-2xl">Custom Hook Form</p>
          <HookForm />
        </div>
      </div>
      {navigation.state === "loading" ? <p>Loading...</p> : <Outlet />}
      {/* <Outlet /> */}
      <Footer />
    </div>
  );
};

export default Home;
