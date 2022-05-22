import { useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";

const ShowSearch = (props) => {
    const [shows, setShows] = useState([])
    return ( 
        <>
        <h3>TV Shows</h3>
        <SearchForm />
        </>
     );
}
 
export default ShowSearch;