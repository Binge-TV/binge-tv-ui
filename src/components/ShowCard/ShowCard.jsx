import { Link } from 'react-router-dom'

const ShowCard = (props) => {
    return ( 
        <>
        <Link to={`/show/${props.show.id}`}>
            {props.show.poster_path ? 
        <img src={`https://image.tmdb.org/t/p/w500${props.show.poster_path}`} alt={props.show.name} />
        : <img src='public/images/showPlaceHolder.png' alt='placeholder'/>}
           <br/>
            {props.show.name}
        </Link>
        
        <br/>
        </>
     );
}
 
export default ShowCard;