import { useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import { showSearch } from "../../services/api-calls";

const ShowSearch = (props) => {
    const [shows, setShows] = useState([])
    const BASE_URL = 'https://image.tmdb.org/t/p/w500/'

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
                    <img src={`${BASE_URL}${show.backdrop_path}`} alt={`${show.name}`}  /><br/>
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