import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getShowDetails } from '../../services/api-calls';
import NavBar from '../../components/NavBar/NavBar';
import './ShowDetails.css'

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
            <div className='show-details'>
            { showDetails.name ?
            <>
            <h1 style={{textAlign: 'center'}}>{showDetails.name}</h1>
                {/* check for api results */}
            {showDetails.origin_country[0] ? 
            // if no origin display alt message
            <p>Country of origin: <strong>{showDetails.origin_country[0]}</strong></p> :
            <p>Country of origin: <strong>Sorry no signal</strong></p>}
            {/* if no image display default image */}
            {showDetails.poster_path ? 
            <img src={`https://image.tmdb.org/t/p/w500${showDetails.poster_path}`} alt={showDetails.name} />
            : <img src='/images/showPlaceHolder.png' alt={showDetails.name} />}
            <p>{showDetails.overview}</p><br/>
            </>
            :
            <p>No Show Found</p>
            }
            </div>
        </>
       )
}
 
export default ShowDetails;