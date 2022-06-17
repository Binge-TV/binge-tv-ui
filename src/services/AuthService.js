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

  getUser() {
    return TokenService.getUserFromToken();
  }

   logout(refreshToken, username) {
 
    const refreshTokenResponse = {
      refreshToken: refreshToken,
      username: username
    }
    try {
     axios.post(`${BASE_URL}/logout`, refreshTokenResponse)
      .then((res) => {
        console.log("TEST LOGOUT RES",res)
          console.log("LOGOUT DATA", res.data)
          TokenService.removeToken();
        
        if (res.err) {
          throw new Error(res.err);
        }
      })
    } catch (err) {
      console.log(err);
      throw err;
    }
    
  }

  async login(credentials) {
    try {
      await axios.post(`${BASE_URL}/login`, credentials).then((res) => {
        console.log("CREDENTIALS", credentials);
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
      console.log(err);
      throw err;
    }
  }
}

export default new AuthService();
