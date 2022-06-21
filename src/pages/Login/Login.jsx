import { useState } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import styles from './Login.module.css'

const LoginPage = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <>
      { localStorage.getItem("authenticationToken") === "undefined" ? 
    <main className={styles.container}>
      <h1>Log In</h1>
      <h4>User Registration Successful an email has been sent to the email provided,<br/>
         please click activation link before attempting to login.</h4> 
      <p>{message}</p>
      <LoginForm
        {...props}
        updateMessage={updateMessage}
      /> 
    </main>
         : 
         <main className={styles.container}>
         <h1>Log In</h1>
         <p>{message}</p>
         <LoginForm
           {...props}
           updateMessage={updateMessage}
         /> 
       </main>
         }
    
    </>
  )
}

export default LoginPage