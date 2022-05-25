const baseUrl = "https://api.themoviedb.org/3/";
const API_KEY = "search/tv?api_key=360683f667d468ee222e687bb91a616d&language=en-US&page=1&include_adult=false&query="
const details = "https://api.themoviedb.org/3/tv/"
const details_API = "?api_key=360683f667d468ee222e687bb91a616d&language=en-US&id=109939"

//api call using form data for the query to search for specific show
export function showSearch(formData) {
    return fetch(`${baseUrl}${API_KEY}${formData.query}`,{})
    .then(res => res.json())
}

//api call using the showId to get more details about specific show
export function getShowDetails(showId) {
    return fetch(`${details}${showId}${details_API}`)
    .then(res => res.json())
}