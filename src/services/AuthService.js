import axios from "axios";
import TokenService from "./TokenService";

const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/v1/auth`;

class AuthService {
  async signup(user) {
    try {
      await axios.post(`${BASE_URL}/signup`, user).then((res) => {
        console.log("SIGN UP RES", res);
        if (res) {
          TokenService.setToken(
            res.data.authenticationToken,
            res.data.refreshToken,
            res.data.expiresAt
          );
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

  async logout(refreshToken, username) {
    const refreshTokenResponse = {
      refreshToken: refreshToken,
      username: username,
    };
   await axios.post(`${BASE_URL}/logout`, refreshTokenResponse).then((res) => {
      console.log(res)
      TokenService.removeToken();
      if (res.err) {
        console.log(res.err);
        throw new Error(res.err);
      }
    });
  }

  async login(credentials) {
    try {
      await axios.post(`${BASE_URL}/login`, credentials).then((res) => {
        if (res.data) {
          console.log("CREDS", credentials)
          TokenService.setToken(
            res.data.authenticationToken,
            res.data.username,
            res.data.refreshToken,
            res.data.expiresAt
          );
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
