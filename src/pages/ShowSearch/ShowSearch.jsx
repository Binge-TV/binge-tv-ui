import { useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import ApiService from "../../services/ApiService";
import ShowCard from "../../components/ShowCard/ShowCard";
import NavBar from "../../components/NavBar/NavBar";
import "./ShowSearch.css";

const ShowSearch = (props) => {
  const [shows, setShows] = useState([]);

  const handleShowSearch = (formData) => {
    ApiService.searchApiByName(formData.query)
      .then((res) => {
        setShows(res.data.results);
      })
      .catch((err) => {
        alert.log(err);
      });
  };
  return (
    <>
      <NavBar
        handleLogout={props.handleLogout}
        user={props.user}
        navItems={props.navItems}
      />
      <SearchForm handleShowSearch={handleShowSearch} />
      {shows.length ? (
        <>
          <main className="bg-light">
            <div className="container py-5 px-3">
              <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g5 px-sm-5 px-4">
                {shows.map((show) => (
                  <ShowCard show={show} key={show.id} />
                ))}
              </div>
            </div>
          </main>
        </>
      ) : (
        <div>
          <h3 style={{ textAlign: "center" }}>no shows found</h3>
        </div>
      )}
    </>
  );
};

export default ShowSearch;
