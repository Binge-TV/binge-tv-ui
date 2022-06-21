import { useState } from "react";
import ApiService from "../../services/ApiService";
import { useParams } from 'react-router-dom';



const BingedListForm = ({ show }) => {
    // const [show, setShow] = useState()
   const [formData, setFormData] = useState({
    showName: show.name,
    showId: show.id
   },[])

   const { showId } = useParams()

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
      }

      const handleSubmit = e => {
        e.preventDefault()
        console.log("DATA", formData)
        ApiService.addShowToBingedList(showId,formData)
       
      }

    return ( 
<>
    <form onSubmit={handleSubmit}>
        <input onChange={handleChange} id="showName" type="text" hidden readOnly name="showName" value={show.name} />
        <input onChange={handleChange} type="text" id="showId" hidden readOnly name="showId"  value={show.id} />
        
        <button>Add Show to Binged-List</button>
        <h1>{formData.showId} / {show.name}</h1>
    </form>

</>

     );
}
 
export default BingedListForm;