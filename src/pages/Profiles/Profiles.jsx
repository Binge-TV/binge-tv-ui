import { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar/NavBar.jsx';
import ProfileCard from '../../components/ProfileCard/ProfileCard.jsx';
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
        <main className="bg-light">
      <div classname="container py-5 px-3">
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 
      row-cols-xl-5 g5 g-sm-3 g-xxl-5 px-sm-5 px-4">
          {users.map(user =>
           <ProfileCard user={user}
           key={user.userId} />
          )}
          </div>
          </div>
          </main>
        
        </>
      :
        <p>No profiles yet</p>
      }
    </>
  );
}
 
export default Profiles;
