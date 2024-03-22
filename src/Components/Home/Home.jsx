import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
// import SimpleForm from "../SimpleForm/SimpleForm";
import StatefulForm from "../SimpleForm/StatefulForm";
import RefForm from "../SimpleForm/RefForm";
import HookForm from "../HookForm/HookForm";
import ReuseableForm from "../ReuseableForm/ReuseableForm";

const Home = () => {
  const navigation = useNavigation();
  // const location = useLocation();
  // console.log(location);
  const handleSignUpSubmit = (data) => {
    console.log("form Sign Up: ", data);
  };
  const handleUpdateProfile = (data) => {
    console.log("form Update: ", data);
  };
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
          <p className="text-center text-2xl">Reuseable Form</p>
          <ReuseableForm
            formTitle={"Sign Up"}
            handleSubmit={handleSignUpSubmit}
          />
          <ReuseableForm
            formTitle={"Profile Update"}
            submitBtnText={"Update"}
            handleSubmit={handleUpdateProfile}
          />
        </div>
      </div>
      {navigation.state === "loading" ? <p>Loading...</p> : <Outlet />}
      {/* <Outlet /> */}
      <Footer />
    </div>
  );
};

export default Home;
