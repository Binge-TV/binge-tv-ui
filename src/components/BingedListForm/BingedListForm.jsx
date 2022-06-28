import { useState } from "react";
import ApiService from "../../services/ApiService";
import { useParams } from "react-router-dom";

// form to add shows to Binged list hard coded form inputs with api results and current user
const BingedListForm = ({ show, user }) => {
  const [isShowAdded, setIsShowAdded] = useState(false);
  const [formData, setFormData] = useState(
    {
      showName: show.name,
      showId: show.id,
      users: user,
    },
    []
  );

  const { showId } = useParams();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("DATA", formData);
    ApiService.addShowToBingedList(showId, formData, user);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button onClick={() => setIsShowAdded(!isShowAdded)}>Add Show</button>
      </form>
      {isShowAdded ? (
        <div>
          <br />
          <h1>Added to Binged List</h1>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default BingedListForm;
