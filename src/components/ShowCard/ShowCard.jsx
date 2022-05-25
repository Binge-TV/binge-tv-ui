import { Link } from 'react-router-dom'

const ShowCard = (props) => {
    return ( 
        <>
        <Link to={`/show/${props.show.id}`}>
            <div>
            {props.show.poster_path ? 
        <img src={`https://image.tmdb.org/t/p/w500${props.show.poster_path}`} alt={props.show.name} />
        : <img src='/images/showPlaceHolder.png' alt={props.show.name }/>}
           <br/>
            {props.show.name}
            </div>
        </Link>
        
        <br/>
        </>
     );
}
 
export default ShowCard;