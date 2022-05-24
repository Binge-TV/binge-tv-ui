import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getShowDetails } from '../../services/api-calls';
import NavBar from '../../components/NavBar/NavBar';


const ShowDetails = (props) => {
    const [showDetails, setShowDetails] = useState({})
    const { showName } = useParams()

    useEffect(()=> {
        getShowDetails(showName)
        .then(showData => setShowDetails(showData))
    },[showName])

    return ( 
        <>
        <NavBar navItems={props.navItems}/>
            <h3>Show Details</h3>
            { showDetails.name ?
            <>
            <h1>{showDetails.name}</h1>
            <p>Country of origin: <strong>{showDetails.origin_country[0]}</strong></p>
            <img src={`https://image.tmdb.org/t/p/w500${showDetails.poster_path}`} alt={showDetails.name} />
            <p>{showDetails.overview}</p><br/>
            </>
            :
            <p>No Show Found</p>
            }
        </>
       )
}
 
export default ShowDetails;