import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = (props) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ email: "" }, { password: "" });
  const [message, setMessage] = useState("");

  const userValidation = () => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(formData.email) && formData.password !== "") {
     setMessage("Welcome to Binged [TV]")
      navigate('/show-search')
    } else if (!regEx.test(formData.email) && formData.email !== "") {
      setMessage("Email is Not Valid");
    } else {
      setMessage("");
    }
  };


  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleShowSearch(formData);
  };
  return (
    <>
      <form 
      autoComplete="off"
      onSubmit={handleSubmit}>
        <table>
          <tr>
            <th>Login</th>
          </tr>
          <tr>
            <td>
              {" "}
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
          <tr></tr>
          <td>
            {" "}
            <label htmlFor="">Password:</label>
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
            <button 
           
            onClick={userValidation}>Login</button>
            <button onClick={()=> window.location.reload()}>Cancel</button>
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
