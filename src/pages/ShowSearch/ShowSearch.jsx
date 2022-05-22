import { useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import { showSearch } from "../../services/api-calls";
import ShowCard from "../../components/ShowCard/ShowCard";

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
            <ShowCard
               show={show}
               key={show.id}
               />
            )}
            </>    
            :
            <h3>Please search for a show</h3>
            }
        </>
     );
}
 
export default ShowSearch;