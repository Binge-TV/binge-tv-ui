import { useState } from "react";

const LoginForm = (props) => {
  const [formData, setFormData] = useState({ email: "" }, { password: "" });
  const [message, setMessage] = useState("");

  const userValidation = () => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(formData.email)) {
      setMessage("Email is Valid");
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
      <form onSubmit={handleSubmit}>
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
                autoComplete="off"
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
              autoComplete="off"
              value={formData.password}
              onChange={handleChange}
            />
          </td>
          <tr>
            <button onClick={userValidation}>Login</button>
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
