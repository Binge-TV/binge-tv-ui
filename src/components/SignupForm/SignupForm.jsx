import { useState } from "react";

const SignupForm = (props) => {
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        passwordConf: '',
        gender: ''
      })

      const handleChange = e => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        })
      }

      const handleSubmit = async e => {
        e.preventDefault()
        
      }
    
      const { name, gender, email, password, passwordConf } = formData

      const isFormInvalid = () => {
        return !(name && gender && email && password  && password === passwordConf)
      }

      return (
        <form
          autoComplete="off"
          onSubmit={handleSubmit}
          
        >
          <div >
            <label htmlFor="name" >Name</label>
            <input
              type="text"
              autoComplete="disabled"
              id="name"
              value={name}
              name="name"
              onChange={handleChange}
            />
          </div>
          <div >
          <label htmlFor="gender" >Gender</label>
          <select
            autoComplete="disabled"
            type="text"
            id="gender"
            name="gender"
            
            onChange={handleChange}
          >
              <option value="none" selected disabled hidden>Select a Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Non-Binary">Non-Binary</option>
          </select>
          
        </div>
          <div >
            <label htmlFor="email" >Email</label>
            <input
              type="text"
              autoComplete="disabled"
              id="email"
              value={email}
              name="email"
              onChange={handleChange}
            />
          </div>
          <div >
            <label htmlFor="password">Password</label>
            <input
              type="password"
              autoComplete="disabled"
              id="password"
              value={password}
              name="password"
              onChange={handleChange}
            />
          </div>
          <div >
            <label htmlFor="confirm" >
              Confirm Password
            </label>
            <input
              type="password"
              autoComplete="disabled"
              id="confirm"
              value={passwordConf}
              name="passwordConf"
              onChange={handleChange}
            />
          </div>
          <div >
            <button disabled={isFormInvalid()} >
              Sign Up
            </button>
              <button>Cancel</button>
          </div>
        </form>
      )
    }
    
export default SignupForm;