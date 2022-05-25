import { useState } from "react";
import './SearchForm.css'

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
        <div className="search-container">
          <form onSubmit={handleSubmit}>
            <input 
            name="query" 
            type="text" 
            autoComplete="off"
            value={formData.query}
            onChange={handleChange}
            />
            <button style={{border: 'none', margin: 0, backgroundColor: '#f6afb3', color: '#fee8ea', fontSize: '22px', height: '56px' , padding: 0 }} type="submit">Search</button>
          </form>
        </div>
      </>
    );
  }
   
  export default SearchForm;