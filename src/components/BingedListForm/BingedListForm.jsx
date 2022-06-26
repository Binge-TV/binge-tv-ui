import { useEffect, useState } from "react";
import ApiService from "../../services/ApiService";
import { useParams } from 'react-router-dom';
import ProfileService from "../../services/ProfileService";



const BingedListForm = ({ show, user }) => {
    // const [show, setShow] = useState()
    const [userId, setUserId] = useState()
   const [formData, setFormData] = useState({
    showName: show.name,
    showId: show.id,
    users: user 
   },[])

//    useEffect(()=> {
//     ProfileService.getAllProfiles()
//      .then(res => {
//       console.log("BINGED", res.data)
//        setUserId(res.data[0].userId)
//        console.log("USERS", res.data[0].userId)
//    }).catch(err => {
//      console.log("ERROR: ",err)
//  })
//    }, [])
   

   const { showId } = useParams()

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
      }

      const handleSubmit = e => {
        e.preventDefault()
        console.log("DATA", formData)
        ApiService.addShowToBingedList(showId,formData, user)
       
      }

    return ( 

<>
{console.log("USER!!!!",userId)}
    <form onSubmit={handleSubmit}>
        {/* <input onChange={handleChange} 
        id="showName" type="text" 
        hidden readOnly name="showName" 
        value={show.name} />
        <input onChange={handleChange} 
        type="text" id="showId" 
        hidden readOnly name="showId"  
        value={show.id} /> */}
         {/* <input onChange={handleChange} 
        type="text" id="userId" 
        hidden readOnly name="userId"  
        value={user} /> */}
       
        
        <button>Add Show to Binged-List</button>
        <h1>{formData.showId} / {show.name} / {userId}</h1>
    </form>

</>

     );
}
 
export default BingedListForm;