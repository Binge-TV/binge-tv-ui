import axios from "axios";
import TokenService from "./TokenService";

const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/v1/auth`;
// calls to backend for Auth endpoint
class AuthService {
  async signup(user) {
    try {
      await axios.post(`${BASE_URL}/signup`, user).then((res) => {
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
      alert(err.response.data.message);
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
    axios.post(`${BASE_URL}/logout`, refreshTokenResponse).then(() => {
      TokenService.removeToken();
    });
  }

  async login(credentials) {
    try {
      await axios.post(`${BASE_URL}/login`, credentials).then((res) => {
        if (res.data) {
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
      alert(err);
      throw err;
    }
  }
}

export default new AuthService();
