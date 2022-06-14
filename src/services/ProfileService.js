import axios from "axios";
import TokenService from "./TokenService";

const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/v1/profiles`;

class ProfileService {
  async getAllProfiles() {
    const res = await axios.get(BASE_URL, {
      headers: { Authorization: `Bearer ${TokenService.getToken()}` },
    });
    return await res.json();
  }
}

export default new ProfileService();
