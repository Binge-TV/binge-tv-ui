import { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar/NavBar.jsx';
import ProfileService from '../../services/ProfileService.js'

const Profiles = (props) => {
  const [users, setUser] = useState([])

  useEffect(()=> {
   ProfileService.getAllProfiles()
    .then(res => {
      console.log("PROF", res.data)
      setUser(res.data)
  }).catch(err => {
    console.log(err)
})
  }, [])

  return (
    <>
    <NavBar handleLogout={props.handleLogout} user={props.user} navItems={props.navItems} />
      <h1>Hello.  This is a list of all the profiles.</h1>
      {users.length ?
        <>
          {users.map(user =>
            <p key={user.email} >{user.username}</p>
          )}
        </>
      :
        <p>No profiles yet</p>
      }
    </>
  );
}
 
export default Profiles;
