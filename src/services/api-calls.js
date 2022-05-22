
const baseUrl = "http://www.omdbapi.com/?t=";
let query;

export function getShowList() {
    return fetch(`${baseUrl}${query}{process.env.REACT_APP_API_KEY}`)
}