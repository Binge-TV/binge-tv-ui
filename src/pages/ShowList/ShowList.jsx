import  { useEffect, useState } from 'react';
import { getShowList } from '../../services/api-calls';

const ShowList = (props) => {
    const [shows, setShows] = useState();

    useEffect(() => {
        getShowList()
        .then(showData => setShows(showData.results))
    },[])
    
    return ( 
        <>
            <div>
                <h3>Show List</h3>
                <div className='icon-container'>
                    {shows.map((showTitle) => (
                        <p>

                            {showTitle}
                        </p>
                    ))}
                </div>
            </div>
        </>
     );
}
 
export default ShowList;
