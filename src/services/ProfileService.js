import axios from "axios";
import TokenService from "./TokenService";

const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/v1/profiles`;

class ProfileService {
   getAllProfiles() {
    return  axios
      .get(BASE_URL)
      // .then((res) => {
      //   console.log("RES",res.data)
      // })
      // .catch((err) => {
      //   console.log(err);
      // });
  }

  async getProfileById(id) {
    await axios
    .get(`BASE_URL/${id}`, {
      headers: { Authorization: `Bearer ${TokenService.getToken()}` },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    })
  }
}

export default new ProfileService();