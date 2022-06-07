import axios from "axios";

const SHOW_BASE_REST_API_URL = 'http://localhost:8080/api/v1/shows';

class ApiService {

    searchApiByName(formData) {
        console.log("TEST" ,formData)
        return axios.post(SHOW_BASE_REST_API_URL, formData)
    }

    searchApiById(showId) {
        return axios.get(SHOW_BASE_REST_API_URL + '/' + showId)
    }
}

export default new ApiService();