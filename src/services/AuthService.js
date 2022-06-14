import axios from "axios";
import TokenService from "./TokenService";
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/v1/auth`;

class AuthService {
  async signup(user) {
    try {
      await axios.post(`${BASE_URL}/signup`, user).then((res) => {
        console.log("TOKEN", res);
        if (res.token) {
          TokenService.setToken(res.token);
        }
        if (res.err) {
          throw new Error(res.err);
        }
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  getUser() {
    return TokenService.getUserFromToken();
  }

  logout() {
    TokenService.removeToken();
  }

  async login(credentials) {
    try {
      await axios.post(`${BASE_URL}/login`, credentials).then((res) => {
        if (res.token) {
          TokenService.setToken(res.token);
        }
        if (res.err) {
          throw new Error(res.err);
        }
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}

export default new AuthService();
