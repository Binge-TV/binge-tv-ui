/* eslint-disable no-undef */
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import NavBar from "../../components/NavBar/NavBar"
import ProfileService from "../../services/ProfileService"
import { Link, useNavigate } from "react-router-dom";
import styles from './ProfileDetails.module.css'

const ProfileDetails = (props) => {
    const [userDetails, setUserDetails] = useState([])
     const { userId } = useParams()
     const navigate = useNavigate()
     const [formData, setFormData] = useState({
       password: '',
       passwordConf: '',
     })

     const updateMessage = msg => {
        setMessage(msg)
      }

    useEffect(()=> {
        ProfileService.getProfileById(userId)
        .then(res => {
            setUserDetails(res.data)
        }).catch(err => {
            console.log(err)
        })
    },[userId])

    const handleSubmit = async e => {
        e.preventDefault()
        try {
          await ProfileService.updateProfile(formData, userId)
          navigate('/profiles/:userId')
        } catch (err) {
          updateMessage(err.message)
        }
      }

      const handleChange = e => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        })
      }
    
    
      const { password, passwordConf } = formData
    
      const isFormInvalid = () => {
        return !(password && password === passwordConf)
      }

    return ( 
        <>
        <NavBar handleLogout={props.handleLogout} user={props.user} navItems={props.navItems} />
        <section className="bg-light text-secondary px-4 py-5 text-center">
        <h1 className="display-5 fw-bold text-dark pt-2">{userDetails.username}</h1>
        <div className="container py-4">
        </div>

        {props.user === userDetails.username ? 
         <form
         autoComplete="off"
         onSubmit={handleSubmit}
         className={styles.container}
       >
         <div className={styles.inputContainer}>
           <label htmlFor="password" className={styles.label}>Password</label>
           <input
             type="text"
             autoComplete="off"
             id="password"
             value={password}
             name="password"
             onChange={handleChange}
           />
         </div>
         <div className={styles.inputContainer}>
           <label htmlFor="confirm" className={styles.label}>
             Confirm Password
           </label>
           <input
             type="text"
             autoComplete="off"
             id="confirm"
             value={passwordConf}
             name="passwordConf"
             onChange={handleChange}
           />
         </div>
         <div className={styles.inputContainer}>
           <button disabled={isFormInvalid()} className={styles.button}>
            Update
           </button>
           <Link to='/profiles'>
             <button>Cancel</button>
           </Link>
         </div>
       </form>
        : 
        <p>HI</p> 
    }
        </section>
        
        </>
     );
}
 
export default ProfileDetails;