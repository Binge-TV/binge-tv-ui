import { Link } from "react-router-dom";

const ProfileCard = (props) => {
  return (
    <>
      <div className="col">
        <div className="card shadow-sm">
          <img
            className="card-img-top"
            src="/images/placeholderAvatar.png"
            alt="Person with TV for head"
          />
          <div className="card bg-light fs-4 shadow-sm mt-3">
            <Link to={`/profiles/${props.user.userId}`}>
              {props.user.username}
            </Link>
            <div className="card-body">
              <p className="card-title fs-5 text-dark">{props.user.bio}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
