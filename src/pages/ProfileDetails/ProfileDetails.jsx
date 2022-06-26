/* eslint-disable no-undef */
import { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import ProfileService from "../../services/ProfileService";
import styles from "./ProfileDetails.module.css";

const ProfileDetails = (props) => {
  const [userDetails, setUserDetails] = useState([]);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [updateProfile, setUpdateProfile] = useState(false);
  const [updatePassword, setUpdatePassword] = useState(false);
  const { userId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    password: "",
    passwordConf: "",
    bio: "",
  });

  const updateMessage = (msg) => {
    setMessage(msg);
  };

  useEffect(() => {
    ProfileService.getProfileById(userId)
      .then((res) => {
        console.log(res.data);
        setUserDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userId]);

  const deleteProfile = () => {
    ProfileService.deleteProfile(userId).then(navigate("/"));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await ProfileService.updateProfile(formData, parseInt(userId)).then(
        updatePassword
          ? setUpdatePassword(!updatePassword)
          : updateProfile
          ? setUpdateProfile(!updateProfile)
          : false
      );
    } catch (err) {
      updateMessage(err.message);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const { password, passwordConf, bio } = formData;

  const isFormInvalid = () => {
    return !(password && password === passwordConf);
  };

  return (
    <>
      <NavBar
        handleLogout={props.handleLogout}
        user={props.user}
        navItems={props.navItems}
      />
      <section className="bg-light text-secondary px-4 py-5 text-center">
        <img
          className="image-rounded"
          src="/images/placeholderAvatar.png"
          alt="Person with TV for head"
        />
        <h1 className="display-5 fw-bold text-dark pt-2">
          {userDetails.username}
        </h1>
        <div className="container py-4">
          <p>{userDetails.bio}</p>
        </div>

        {props.user === userDetails.username ? (
          <div>
            <button onClick={() => setUpdatePassword(!updatePassword)}>
              Update Password
            </button>
            <button onClick={() => setUpdateProfile(!updateProfile)}>
              Update Profile
            </button>
            {updatePassword ? (
              <form
                autoComplete="off"
                onSubmit={handleSubmit}
                className={styles.container}
              >
                <div className={styles.inputContainer}>
                  <label htmlFor="password" className={styles.label}>
                    Password
                  </label>
                  <input
                    type="text"
                    autoComplete="off"
                    id="password"
                    value={password}
                    name="password"
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.inputContainer}>
                  <label htmlFor="confirm" className={styles.label}>
                    Confirm Password
                  </label>
                  <input
                    type="text"
                    autoComplete="off"
                    id="confirm"
                    value={passwordConf}
                    name="passwordConf"
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.inputContainer}>
                  <button disabled={isFormInvalid()} className={styles.button}>
                    Update Password
                  </button>
                  <button onClick={() => setUpdatePassword(!updatePassword)}>
                    OOPS! Cancel
                  </button>
                </div>
              </form>
            ) : (
              <></>
            )}
            {updateProfile ? (
              <form
                autoComplete="off"
                onSubmit={handleSubmit}
                className={styles.container}
              >
                <div className={styles.inputContainer}>
                  <label htmlFor="bio" className={styles.label}>
                    Bio
                  </label>
                  <textarea
                    type="textarea"
                    id="bio"
                    name="bio"
                    value={bio}
                    onChange={handleChange}
                  />
                  <div className={styles.inputContainer}>
                    <button className={styles.button}>Update Bio</button>
                  </div>
                </div>
              </form>
            ) : (
              <></>
            )}

            <form onSubmit={handleSubmit} className="text-center">
              <button
                onClick={() => setConfirmDelete(!confirmDelete)}
                className="btn btn-danger"
              >
                Delete profile
              </button>
              {confirmDelete ? (
                <>
                  <button
                    onClick={() => setConfirmDelete(!confirmDelete)}
                    className="btn btn-primary"
                  >
                    OOPS I changed my mind
                  </button>
                  <button className="btn btn-danger" onClick={deleteProfile}>
                    Really Delete Profile?
                  </button>
                </>
              ) : (
                <></>
              )}
            </form>
          </div>
        ) : (
          <p>{userDetails.bio}</p>
        )}
      </section>
    </>
  );
};

export default ProfileDetails;
