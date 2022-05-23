import { useState } from "react";
import { Link } from 'react-router-dom'

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
              autoComplete="off"
              id="name"
              value={name}
              name="name"
              onChange={handleChange}
            />
          </div>
          <div >
          <label htmlFor="gender" >Gender</label>
          <select
            type="text"
            id="gender"
            name="gender"
            onChange={handleChange}
          >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Non-Binary">Non-Binary</option>
          </select>
          
        </div>
          <div >
            <label htmlFor="email" >Email</label>
            <input
              type="text"
              autoComplete="off"
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
              autoComplete="off"
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
              autoComplete="off"
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
            <Link to="/show-search">
              <button>Cancel</button>
            </Link>
          </div>
        </form>
      )
    }
    
export default SignupForm;