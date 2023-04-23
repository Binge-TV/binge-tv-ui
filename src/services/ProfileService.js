import axios from "axios";


const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/v2/profiles`;
// calls to backend for Profile endpoints
class ProfileService {
  getAllProfiles() {
    return axios.get(BASE_URL);
  }

  async getProfileById(userId) {
    return axios.get(`${BASE_URL}/${userId}`);
  }

  async updateProfile(user, userId) {
    return axios.patch(`${BASE_URL}/${userId}`, user);
  }

  async deleteProfile(userId) {
    return axios
      .delete(`${BASE_URL}/${userId}`)
  }
}

export default new ProfileService();
