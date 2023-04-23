import axios from "axios";

const SHOW_API_URL = `${process.env.REACT_APP_API_SERVER_URL}shows`;
// calls to back end for Shows endpoints
class ApiService {
  searchApiByName(query) {
    console.log(SHOW_API_URL)
    return axios.post(SHOW_API_URL, query);
  }

  searchApiById(showId) {
    return axios.get(`${SHOW_API_URL}/${showId}`);
  }

  addShowToBingedList(showId, formData, user) {
    return axios.post(`${SHOW_API_URL}/${showId}/add`, formData);
  }

  getAllShows() {
    return axios.get(`${SHOW_API_URL}/index`);
  }
}

export default new ApiService();
