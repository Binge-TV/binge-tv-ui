import { useState } from "react";
import { useEffect } from "react";
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

                {/* checks to see if poster avaiable thru api if else display placeholder image */}
              </Link>
              <div className="card-body">
                <p className="card-title fs-5 text-dark">
                  {props.user.bio}
                </p>

              </div>
            </div>
          </div>
        </div>
       
    </>
  );
};

export default ProfileCard;
