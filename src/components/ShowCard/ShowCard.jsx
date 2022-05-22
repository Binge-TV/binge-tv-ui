import { Link } from 'react-router-dom'

const ShowCard = (props) => {
    return ( 
        <>
        <Link to={`/show/${props.show.id}`}>
            {props.show.name}
            
        </Link>
        <br/>
        </>
     );
}
 
export default ShowCard;