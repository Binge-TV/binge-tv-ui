import axios from "axios";
import TokenService from "./TokenService";

const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/v1/profiles`;

class ProfileService {
  getAllProfiles() {
    return axios.get(BASE_URL);
  }

  async getProfileById(userId) {
    return axios.get(`${BASE_URL}/${userId}`);
  }

  async updateProfile(user, userId) {
    console.log(userId);
    return axios.patch(`${BASE_URL}/${userId}`, user);
  }

  async deleteProfile(userId) {
    return axios
      .delete(`${BASE_URL}/${userId}`)
      .then(TokenService.removeToken());
  }
}

export default new ProfileService();
