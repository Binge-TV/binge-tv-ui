import "./ShowCard.css";
import { Link } from "react-router-dom";

const ShowCard = (props) => {
  return (
    <>
      {/* routes to show detail  */}
      <div className="col">
        <div className="card bg-light fs-4 shadow-sm mt-3">
          <Link to={`/show/${props.show.id}`}>
            {props.show.name}

            {/* checks to see if poster avaiable thru api if else display placeholder image */}
            {props.show.poster_path ? (
              <img
                className="card-img-top show-card"
                src={`https://image.tmdb.org/t/p/w500${props.show.poster_path}`}
                alt={props.show.name}
                width="30%"
                height="30%"
              />
            ) : (
              <img
                className="card-img-top show-card"
                src="/images/showPlaceHolder.png"
                alt={props.show.name}
                width="100%"
                height="80%"
              />
            )}
          </Link>
          <div className="card-body">
            <p className="card-title fs-4 text-dark">{props.show.name}</p>
            <p className="card-text fs-5 text-dark">
              Originally Aired: {props.show.first_air_date}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowCard;
