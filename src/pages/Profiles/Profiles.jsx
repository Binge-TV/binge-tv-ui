import { useState, useEffect } from 'react';
import ProfileService from '../../services/ProfileService.js'

const Profiles = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(()=> {
    ProfileService.getAllProfiles()
    .then(profiles => setProfiles(profiles))
  }, [])

  return (
    <>
      <h1>Hello.  This is a list of all the profiles.</h1>
      {profiles.length ?
        <>
          {profiles.map(profile =>
            <p key={profile._id} >{profile.name}</p>
          )}
        </>
      :
        <p>No profiles yet</p>
      }
    </>
  );
}
 
export default Profiles;
