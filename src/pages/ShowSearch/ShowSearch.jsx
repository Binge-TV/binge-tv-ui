import { useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import ApiService from "../../services/ApiService";
import ShowCard from "../../components/ShowCard/ShowCard";
import NavBar from "../../components/NavBar/NavBar";
import './ShowSearch.css'

const ShowSearch = (props) => {
    const [shows, setShows] = useState([])

    const handleShowSearch = formData => {
        ApiService.searchApiByName(formData.query)
        .then(res => {
            setShows(res.data.results)
            console.log("RESPONSE",res.data.results)
        }).catch(err => {
            console.log(err)
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
            <div>
                <h3 style={{textAlign: 'center'}}>no shows found</h3>
            </div>
            }
        </>
     );
}
 
export default ShowSearch;