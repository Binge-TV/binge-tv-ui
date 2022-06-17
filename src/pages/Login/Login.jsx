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
      { localStorage.getItem("username") === "undefined" ? 
    <main className={styles.container}>
      <h1>Log In</h1>
      <h6>Please remember to validate your email account.  An activation link was sent to the email
        you provided</h6> 
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