import axios from "axios";

const SHOW_API_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/v1/shows`;
// calls to back end for Shows endpoints
class ApiService {
  searchApiByName(formData) {
    return axios.post(SHOW_API_URL, formData);
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
