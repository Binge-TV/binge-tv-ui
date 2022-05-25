import { useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import { showSearch } from "../../services/api-calls";
import ShowCard from "../../components/ShowCard/ShowCard";
import NavBar from "../../components/NavBar/NavBar";
import './ShowSearch.css'

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
        <NavBar navItems={props.navItems} />
        {/* <h3>TV Shows</h3> */}
        <SearchForm handleShowSearch={handleShowSearch} />
        {shows.length ? 
        <> 
         <section className="show-container" style={{margin: 'auto'}}>
            {shows.map(show => 
            <ShowCard
               show={show}
               key={show.id}
               />
            )}
         </section>
            </>    
            :
            <h3>no shows found</h3>
            }
        </>
     );
}
 
export default ShowSearch;