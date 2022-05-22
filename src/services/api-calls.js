
// const baseUrl = "http://www.omdbapi.com/?t=";
// const endUrl = "&apikey=b0222fd4"

// export function getShowList() {
//     return fetch(`${baseUrl}${query}&apikey=b0222fd4`)
//     .then(res => res.json())
// }

// export function showSearch(formData) {
//     return fetch(`${baseUrl}${formData.query}${endUrl}`)
//     .then(res => res.json)
// }


const baseUrl = "https://api.themoviedb.org/3/search/tv?api_key=360683f667d468ee222e687bb91a616d&language=en-US&page=1&include_adult=false&query=";


// export function getShowList(formData) {
//     return fetch(`${baseUrl}${formData.query}&apikey=b0222fd4`)
//     .then(res => res.json())
// }

export function showSearch(formData) {
    return fetch(`${baseUrl}${formData.query}`,{})
    .then(res => res.json())
}