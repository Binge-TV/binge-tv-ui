import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../services/AuthService";

const SignupForm = props => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConf: "",
    gender: "",
  });

  const handleChange = e => {
    props.updateMessage('')
    //changing form values based on the event target
    setFormData({
      //spread operator to preserve the value of forms while updating values in state
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async e => {
    //nothing here yet will change when connected to back end
    e.preventDefault();
    try {
      await AuthService.signup(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  };

  const { name, gender, email, password, passwordConf } = formData;

  const isFormInvalid = () => {
    //checks to make sure all fields are filled and password matches confirmation
    //used to keep button disabled until all match
    return !(name && gender && email && password && password === passwordConf);
  };

  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <table>
          <tr>
            <th>Sign Up</th>
          </tr>
          <tr>
            <td>
              <label htmlFor="name">Name</label>{" "}
            </td>
            <td>
              <input
                type="text"
                autoComplete="disabled"
                id="name"
                value={name}
                name="name"
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="gender">Gender</label>
            </td>
            <td>
              <select
                autoComplete="disabled"
                type="text"
                id="gender"
                name="gender"
                onChange={handleChange}
              >
                <option value="none" selected disabled hidden>
                  Select a Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Non-Binary">Non-Binary</option>
                <option value="Genderfluid">Genderfluid</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="email">Email</label>
            </td>
            <td>
              <input
                type="text"
                autoComplete="disabled"
                id="email"
                value={email}
                name="email"
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="password">Password</label>
            </td>
            <td>
              <input
                type="password"
                autoComplete="disabled"
                id="password"
                value={password}
                name="password"
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="confirm">Confirm Password</label>
            </td>
            <td>
              <input
                type="password"
                autoComplete="disabled"
                id="confirm"
                value={passwordConf}
                name="passwordConf"
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <button disabled={isFormInvalid()}>Sign Up</button>
            </td>
            <td>
              <Link to='/'>
              <button>Cancel</button>
              </Link>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};

export default SignupForm;
