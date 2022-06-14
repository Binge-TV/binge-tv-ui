import axios from "axios";

const SHOW_API_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/v1/shows`;

class ApiService {

    searchApiByName(formData) {
        console.log("TEST" ,formData)
        return axios.post(SHOW_API_URL, formData)
    }

    searchApiById(showId) {
        return axios.get(`${SHOW_API_URL}/${showId}`)
    }
}

export default new ApiService();