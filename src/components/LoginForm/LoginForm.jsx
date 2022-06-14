import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../services/AuthService";

const LoginForm = props => {
  
  const [formData, setFormData] = useState({ 
    email: "",
    password: "",
   });
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  // const userValidation = () => {
    //checks for email pattern to be correct ie cory@cory.com
    //then pseudo logs in user to site using navigate hooks to search page
  //   const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
  //   if (regEx.test(formData.email) && formData.password !== "") {
  //     setMessage("Welcome to Binged [TV]");
  //     navigate("/show-search");
  //   } else if (!regEx.test(formData.email) && formData.email !== "") {
  //     setMessage("Email is Not Valid");
  //   } else {
  //     setMessage("");
  //   }
  // };

  const handleChange = e => {
    props.updateMessage('')
    //changing form values based on the event target
    setFormData({
      //spread operator to preserve the value of forms while updating values in state
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
//re uses the handle submit function passed down thru props
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await AuthService.login(formData)
      props.handleSignupOrLogin();
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <table>
          <tr>
            <th>Login</th>
          </tr>
          <tr>
            <td>
              <label htmlFor="">Email:</label>{" "}
            </td>
            <td>
              <input
                name="email"
                type="email"
                autoComplete="disabled"
                value={formData.email}
                onChange={handleChange}
              />
            </td>
          </tr>
          <td>
            <label htmlFor="password">Password</label>
          </td>
          <td>
            <input
              name="password"
              type="password"
              autoComplete="disabled"
              value={formData.password}
              onChange={handleChange}
            />
          </td>
          <tr>
            <button>Log in</button>
            <Link to='/'>
              <button>Cancel</button>
            </Link>
          </tr>
          <tr>
            <p className="message">{message}</p>
          </tr>
        </table>
      </form>
    </>
  );
};

export default LoginForm;
