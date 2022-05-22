import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getShowDetails } from '../../services/api-calls';


const ShowDetails = (props) => {
    const [showDetails, setShowDetails] = useState({})
    const { showName } = useParams()

    useEffect(()=> {
        getShowDetails(showName)
        .then(showData => setShowDetails(showData))
    },[])

    return ( 
        <>
            <h3>Show Details</h3>
            { showDetails.name ?
            <>
            <h1>{showDetails.name}</h1>
            <img src="#" alt={showDetails.name} />
            <p>{showDetails.overview}</p><br/>
            <p>{showDetails.origin_country[0]}</p>
            </>
            :
            <p>No Show Found</p>
            }
        </>
       )
}
 
export default ShowDetails;