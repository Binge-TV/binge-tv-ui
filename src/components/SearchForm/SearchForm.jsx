import { useState } from "react";

const SearchForm = (props) => {
    const [formData, setForData] = useState({query: ''})

    const handleChange = (evt) => {
        setForData({ ...formData, [evt.target.name]: evt.target.value })
    }

    const handleSubmit = evt => {
        evt.preventDefault()
        props.handleShowSearch(formData)
      }
  
    return (
      <>
        <div>
          <form onSubmit={handleSubmit}>
            <input 
            name="query" 
            type="text" 
            autoComplete="off"
            value={formData.query}
            onChange={handleChange}
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </>
    );
  }
   
  export default SearchForm;