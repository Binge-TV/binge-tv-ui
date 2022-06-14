import { Buffer } from "buffer";

class TokenService {

  setToken(token) {
    localStorage.setItem("token", token);
  }

  getToken() {
    let token = localStorage.getItem("token");
    if (token) {
      const payload = JSON.parse(Buffer.from(token.split(".")[1], "base64"));
      if (payload.exp < Date.now() / 1000) {
        localStorage.removeItem("token");
        token = null;
      }
    } else {
      localStorage.removeItem("token");
    }
    return token;
  }

  getUserFromToken() {
    const token = this.getToken();
    return token
      ? JSON.parse(Buffer.from(token.split(".")[1], "base64")).user
      : null;
  }

  removeToken() {
    localStorage.removeItem("token");
  }
}

export default new TokenService();
