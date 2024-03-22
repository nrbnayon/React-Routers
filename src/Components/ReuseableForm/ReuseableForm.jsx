import PropTypes from "prop-types";

const ReuseableForm = ({
  formTitle,
  handleSubmit,
  submitBtnText = "Submit",
  //   children
}) => {
  const handleLocalSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    handleSubmit(data);
  };
  return (
    <div className="my-4">
      <p className="text-center text-2xl">{formTitle} Form</p>

      <form
        className="card w-96 mx-auto space-y-4"
        onSubmit={handleLocalSubmit}
      >
        <input
          type="text"
          name="name"
          className="grow"
          placeholder="Username"
        />
        <input type="email" name="email" className="grow" placeholder="Email" />
        <input
          type="password"
          name="password"
          className="grow"
          placeholder="password"
        />
        <input
          type="submit"
          className="btn btn-primary"
          value={submitBtnText}
        />
      </form>
    </div>
  );
};
ReuseableForm.propTypes = {
  formTitle: PropTypes.string,
  handleSubmit: PropTypes.func,
  submitBtnText: PropTypes.string,
};

export default ReuseableForm;
