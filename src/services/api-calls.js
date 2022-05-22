
const baseUrl = "http://www.omdbapi.com/?t=";
let query="";

export function getShowList() {
    return fetch(`${baseUrl}${query}&apikey=b0222fd4`)
    .then(res => res.json())
}