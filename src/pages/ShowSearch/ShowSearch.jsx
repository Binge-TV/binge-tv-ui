import { useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import { showSearch } from "../../services/api-calls";

const ShowSearch = (props) => {
    const [shows, setShows] = useState([])

    const handleShowSearch = formData => {
        showSearch(formData)
        .then(showResults => {
            setShows(showResults.results)
        })
    }
    return ( 
        <>
        <h3>TV Shows</h3>
        <SearchForm handleShowSearch={handleShowSearch} />
        {console.log(shows)}
        {shows.length ? 
        <>
            {shows.map(show => 
                <div key={show.id}>
                    {show.name}
                </div>
            )}
            </>    
            :
            <h3>Please search for a show</h3>
            }
        </>
     );
}
 
export default ShowSearch;