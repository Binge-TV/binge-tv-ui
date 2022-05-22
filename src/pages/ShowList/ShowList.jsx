import  { useState } from 'react';

const ShowList = (props) => {
    const [shows, setShows] = useState();
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
