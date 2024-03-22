import useInputState from "../../Hooks/useInputState";

const HookForm = () => {
  //   const [name, handleNameChange] = useInputState("Nayon2");

  const emailState = useInputState("nrb@gmail.com");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form data name: ", emailState.value);
  };
  return (
    <div>
      <form className="card w-96 mx-auto" onSubmit={handleSubmit}>
        <input type="text" className="grow" placeholder="Username" />
        <input
          type="email"
          name="email"
          {...emailState}
          className="grow"
          placeholder="Email"
          //   required
        />
        <input
          type="password"
          name="password"
          className="grow"
          placeholder="password"
          //   required
        />
        <input type="submit" className="btn btn-secondary" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
