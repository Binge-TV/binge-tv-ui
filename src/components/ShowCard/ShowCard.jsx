import './ShowCard.css'

import { Link } from 'react-router-dom'

const ShowCard = (props) => {
    return ( 
        <>
        {/* routes to show detail  */}
            {/* <div > */}
        <Link to={`/show/${props.show.id}`}>
            {props.show.name}
           {/* <br/> */}
            {/* checks to see if poster avaiable thru api if else display placeholder image */}
            {props.show.poster_path ? 
        <img className='show-card' src={`https://image.tmdb.org/t/p/w500${props.show.poster_path}`} alt={props.show.name} />
        : <img className='show-card' src='/images/showPlaceHolder.png' alt={props.show.name }/>}
        </Link>
            {/* </div> */}
        
        
        </>
     );
}
 
export default ShowCard;