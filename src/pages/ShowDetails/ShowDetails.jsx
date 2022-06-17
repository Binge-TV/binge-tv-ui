import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ApiService from '../../services/ApiService';
import NavBar from '../../components/NavBar/NavBar';
import './ShowDetails.css'
import { Link } from 'react-router-dom'

const ShowDetails = (props) => {
    const [showDetails, setShowDetails] = useState({})
    const { showId } = useParams()

    useEffect(()=> {
        ApiService.searchApiById(showId)
        .then(res => {
            console.log("SHOW",showId)
            setShowDetails(res.data)
            console.log("RESPONSE",res.data)
        }).catch(err => {
            console.log(err)
        })
       
    },[showId])

    return ( 
        <>
        <NavBar handleLogout={props.handleLogout} user={props.user} navItems={props.navItems}/>
        {props.user ? 
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
            <button>Add Show to Watched List</button>
            </>
            :
            <p>No Show Found</p>
            }
            </div>
        : 
        <>
        <h1> Connection Lost : Please login</h1>
         <Link to="/login">
           <button>Login</button>
         </Link>
        </>
    }
        </>
       )
}
 
export default ShowDetails;