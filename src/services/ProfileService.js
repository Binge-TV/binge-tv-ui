import axios from "axios";


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

  async getProfileById(userId) {
    return axios
    .get(`${BASE_URL}/${userId}`)
   
}

  async updateProfile(user,userId) {
    console.log(userId)
    return axios
    .patch(`${BASE_URL}/${userId}`, user)
  }
}

export default new ProfileService();