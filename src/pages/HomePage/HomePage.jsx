
import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import ShowCard from "../../components/ShowCard/ShowCard";
import ApiService from "../../services/ApiService";

const HomePage = ({navItems, handleLogout, user}) => {
    const [shows, setShows] = useState([])

    useEffect(() => {
        ApiService.getAllShows()
        .then(res => {
         let filteredShows = new Set(res.data.map(shows => (
             [shows.showId  , shows.showName]
         ))
         )
            //  let filteredShows = res.data.filter((shows, idx) => idx < 11)
            console.log(filteredShows)
            console.log(res.data)
            setShows(res.data)
        })
    },[])
    return ( 
        <>
        <NavBar handleLogout={handleLogout} user={user} navItems={navItems}/>
       
        <main className="bg-light">
    <div className="container py-5 px-3">
      <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g5 px-sm-5 px-4">
            
        {shows.map(show => 
          
            <ShowCard
               id={show.showId} 
               show={show}
               key={show.id}
               name={show.showName}
               />
               
            )}

            </div>
            
            </div>
            </main>

        </>
     );
}
 
export default HomePage;