import { useState } from "react";

// uses input to send query to backend api
const SearchForm = (props) => {
  const [formData, setFormData] = useState({ query: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleShowSearch(formData);
  };

  return (
    <>
      <div className="search-container">
        <form onSubmit={handleSubmit}>
          <input
            name="query"
            type="text"
            autoComplete="off"
            value={formData.query}
            onChange={handleChange}
            placeholder="Search for show"
          />
          <button
            style={{
              border: "none",
              margin: 0,
              backgroundColor: "#f6afb3",
              color: "#fee8ea",
              fontSize: "22px",
              height: "56px",
              padding: 0,
            }}
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchForm;
