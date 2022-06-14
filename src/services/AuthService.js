import axios from "axios";
import TokenService from "./TokenService";
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/v1/auth`;

class AuthService {
  async signup(user) {
    try {
      const res = await axios.post(`${BASE_URL}/signup`, {
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify(user),
      });
      const json = await res.json();
      if (json.token) {
        TokenService.setToken(json.token);
      }
      if (json.err) {
        throw new Error(json.err);
      }
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
      const res = await axios.post(`${BASE_URL}/login`, {
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify(credentials),
      });
      const json = await res.json();
      if (json.token) {
        TokenService.setToken(json.token);
      }
      if (json.err) {
        throw new Error(json.err);
      }
    } catch (err) {
      throw err;
    }
  }
}

export default new AuthService();
